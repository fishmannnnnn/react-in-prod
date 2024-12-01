import clsx from "clsx";
import { useTranslation } from "react-i18next";

import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	const { t } = useTranslation();
	return (
		<div className={clsx(styles.NotFoundPage, className)}>
			{t("pageNotFound")}
		</div>
	);
};
