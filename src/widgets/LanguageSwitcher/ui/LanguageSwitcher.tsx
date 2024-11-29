import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
	const { t, i18n } = useTranslation();
	const toggle = async () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};
	return (
		<Button
			className={clsx(className)}
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
		>
			{t("language")}
		</Button>
	);
};
