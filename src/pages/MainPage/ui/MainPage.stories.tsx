import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import type { Meta, StoryObj } from "@storybook/react";

import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
	title: "pages/MainPage",
	component: MainPage,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
