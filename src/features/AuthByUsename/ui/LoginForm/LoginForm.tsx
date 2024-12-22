import clsx from "clsx";
import { useTranslation } from "react-i18next";

import styles from "./LoginForm.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	return (
		<div className={clsx(styles.LoginForm, className)}>
			<Input
				type="text"
				className={styles.input}
				placeholder={t("Username")}
			/>
			<Input
				type="text"
				className={styles.input}
				placeholder={t("Password")}
			/>
			<Button className={styles.loginBtn}>{t("login")}</Button>
		</div>
	);
};
