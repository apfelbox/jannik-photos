import Head from 'next/head';
import {GetStaticProps, NextPage} from 'next';
import {fetchPhotos} from '../lib/server/contentful';
import {Application} from '../lib/app';
import {Layout} from '../components/Layout';
import {About} from '../components/Homepage/About';
import styles from "../assets/page-module/Home.module.scss";

export const getStaticProps: GetStaticProps<HomepageProps> = async () =>
{
	return {
		props: {
			feed: await fetchPhotos(),
		},
	};
};

interface HomepageProps
{
	feed: Array<Application.Photo>;
}

/**
 *
 */
const Homepage: NextPage<HomepageProps> = (props) =>
{
	return (
		<>
			<Head>
				<title>Photos</title>
				<meta name="description" content="A selection of some of the photos by Jannik" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<About
					className={styles.about}
					headline="Hi 👋 I'm Jannik, a hobby photographer from Germany"
				>
					<p>Here you can find a selection of some of my photos</p>
				</About>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
			</Layout>
		</>
	);
};

export default Homepage;
