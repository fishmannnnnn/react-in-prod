import { I18nextProvider } from "react-i18next";

import i18n from "@/shared/config/i18n/i18nForStorybook";

export const i18nDecorator = (Story: any) => (
	<I18nextProvider i18n={i18n}>
		<Story />
	</I18nextProvider>
);
