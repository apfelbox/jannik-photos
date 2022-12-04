import {PropsWithChildren, ReactElement} from 'react';
import styles from "./About.module.scss";
import Image from 'next/image';

import IntroImage from "../../assets/img/intro.jpg";
import clsx from 'clsx';

export interface AboutProps
{
	className?: string;
	headline: string;
}

export function About (props: PropsWithChildren<AboutProps>): ReactElement|null
{
	return (
		<div className={clsx(styles.container, props.className)}>
			<Image
				className={styles.image}
				src={IntroImage}
				alt="Motion-blurred photo of me, standing in a foggy park."
			/>
			<div className={styles.text_container}>
				<div className={styles.text_content}>
					<h1 className={styles.headline}>{props.headline}</h1>
					{props.children}
				</div>
			</div>
		</div>
	);
}
