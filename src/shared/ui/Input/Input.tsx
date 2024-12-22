import clsx from "clsx";
import React, { InputHTMLAttributes, memo } from "react";

import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = "text",
		placeholder,
		...otherProps
	} = props;

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<input
			type={type}
			value={value}
			onChange={onChangeHandler}
			className={clsx(styles.input, className)}
			placeholder={placeholder}
			{...otherProps}
		/>
	);
});
