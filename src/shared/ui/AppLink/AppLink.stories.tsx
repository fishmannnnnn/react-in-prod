import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import type { Meta, StoryObj } from "@storybook/react";

import { AppLink, AppLinkTheme } from "./AppLink";

const meta: Meta<typeof AppLink> = {
	title: "shared/AppLink",
	component: AppLink,
	args: {
		to: "/",
		children: "Text",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
	},
};

export const Secondary: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
	},
};

export const Red: Story = {
	args: {
		theme: AppLinkTheme.RED,
	},
};

export const PrimaryDark: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
	args: {
		theme: AppLinkTheme.RED,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
