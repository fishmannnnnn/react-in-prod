import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonTheme } from "./Button";

const meta: Meta<typeof Button> = {
	title: "shared/Button",
	component: Button,
	parameters: {
		// layout: "centered",
	},
	tags: ["autodocs"],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Text",
	},
};

export const Clear: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
