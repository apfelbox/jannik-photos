import {createClient, ContentfulClientApi} from "contentful";
import parse from "date-fns/parse";
import {Application, ContentfulModel} from '../app';

/**
 * Creates the contentful client
 */
export function getContentfulApi () : ContentfulClientApi
{
	return createClient({
		space: process.env.CONTENTFUL_SPACE_ID!,
		accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
	});
}


export async function fetchPhotos () : Promise<Array<Application.Photo>>
{
	const client = getContentfulApi();

	const response = await client.getEntries<ContentfulModel.Photo>({
		content_type: "photo",
		order: "-fields.time_taken",
	});

	return response.items.map(item =>
	{
		const image = item.fields.image.fields.file;

		return {
			image: {
				src: "https://" + image.url,
				alt: item.fields.alt,
				width: image.details.image.width,
				height: image.details.image.height,
			},
			timeTaken: item.fields.time_taken, //parse(item.fields.time_taken, "yyyy-LL-dd'T'HH:mmXXX", new Date()),
			gallery: item.fields.gallery?.fields ?? null,
			location: item.fields.location ?? null,
			tags: item.fields.photo_tags ?? [],
		};
	});
}
