import clsx from "clsx";

import { Loader } from "../Loader/Loader";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={clsx(styles.PageLoader, className)}>
			<Loader />
		</div>
	);
};
