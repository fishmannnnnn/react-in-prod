import { Counter } from "@/entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage = () => {
	const { t } = useTranslation("main");
	return (
		<div>
			<span>{t("main")}</span>
		</div>
	);
};

export default MainPage;
