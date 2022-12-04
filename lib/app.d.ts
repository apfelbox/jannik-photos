export module ContentfulModel
{
	interface Photo
	{
		image: {
			fields: {
				title: string;
				description: string;
				file: {
					url: string;
					details: {
						size: number;
						image: {
							width: number;
							height: number;
						};
					};
					fileName: string;
					contentType: string;
				};
			};
		};
		alt: string;
		gallery?: {
			fields: {
				title: string;
				/**
				 * Format: 2022-10-17
				 */
				date: string;
				slug: string;
			}
		};
		/**
		 * Format: 2022-10-17T07:31
		 */
		time_taken: string;
		location?: string;
		photo_tags?: Array<string>;
	}
}

export module Application
{
	interface Photo
	{
		image: {
			src: string;
			alt: string;
			width: number;
			height: number;
		};
		timeTaken: string;
		gallery: {
			title: string;
			date: string;
			slug: string;
		}|null;
		location: string|null;
		tags: Array<string>;
	}
}
