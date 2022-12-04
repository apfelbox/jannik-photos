import Link from 'next/link';
import {ReactElement} from 'react';
import styles from "./SiteHeader.module.scss";

export interface SiteHeaderProps
{
}

export function SiteHeader (props: SiteHeaderProps): ReactElement|null
{
	return (
		<header className={styles.container}>
			<Link className={styles.logo} href="/">Photos</Link>
		</header>
	);
}
