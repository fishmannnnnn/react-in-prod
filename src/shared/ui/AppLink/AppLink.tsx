import clsx from "clsx";
import { Link, LinkProps } from "react-router-dom";

import styles from "./AppLink.module.scss";
import { FC } from "react";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	RED = "red",
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
	to,
	className,
	children,
	theme = AppLinkTheme.PRIMARY,
	...otherProps
}) => {
	return (
		<Link
			className={clsx(styles.AppLink, className, styles[theme])}
			to={to}
		>
			{children}
		</Link>
	);
};
