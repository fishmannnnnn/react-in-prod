import type { Preview } from "@storybook/react";

import { Theme } from "../../src/app/providers/ThemeProvider";
// import i18n from "../../src/shared/config/i18n/i18nForTests";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { i18nDecorator } from "../../src/shared/config/storybook/i18nDecorator";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		StyleDecorator,
		ThemeDecorator(Theme.LIGHT),
		RouterDecorator,
		i18nDecorator,
	],
};

export default preview;
