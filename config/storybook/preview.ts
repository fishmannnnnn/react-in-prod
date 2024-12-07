import { Theme } from "@/app/providers/ThemeProvider";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { i18nDecorator } from "@/shared/config/storybook/i18nDecorator";
import type { Preview } from "@storybook/react";

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
