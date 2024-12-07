import clsx from "clsx";
import { Suspense } from "react";
import { FallbackProps } from "react-error-boundary";
import { useTranslation } from "react-i18next";

import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { PageLoader } from "@/shared/ui/PageLoader/PageLoader";

import styles from "./ErrorPage.module.scss";

interface ErrorPageProps extends FallbackProps {
	className?: string;
}

export const ErrorPage = ({
	error,
	resetErrorBoundary,
	className,
}: ErrorPageProps) => {
	const { t } = useTranslation();
	return (
		<Suspense fallback={<PageLoader />}>
			<div className={clsx(styles.ErrorPage, className)}>
				<p className={styles.errorText}>{t("errorPageText")}</p>
				<Button theme={ButtonTheme.CLEAR} onClick={resetErrorBoundary}>
					{t("reload")}
				</Button>
			</div>
		</Suspense>
	);
};
