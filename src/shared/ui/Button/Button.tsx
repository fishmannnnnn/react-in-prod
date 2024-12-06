import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.scss";

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
	className,
	children,
	theme,
	...otherProps
}) => {
	return (
		<button
			className={clsx(styles.Button, styles[theme], className)}
			{...otherProps}
		>
			{children}
		</button>
	);
};
