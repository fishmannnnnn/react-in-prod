import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";



import { Button, ButtonSize, ButtonTheme } from "./Button";


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
export const ClearInverted: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR_INVERTED,
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

export const OutlineSizeL: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.L,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineSizeXL: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.XL,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInverted: Story = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeL: Story = {
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
        size: ButtonSize.L,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeXL: Story = {
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
        size: ButtonSize.XL,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};