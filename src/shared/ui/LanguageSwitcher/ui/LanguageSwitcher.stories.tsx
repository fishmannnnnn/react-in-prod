import type { Meta, StoryObj } from "@storybook/react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const meta: Meta<typeof LanguageSwitcher> = {
	title: "shared/LanguageSwitcher",
	component: LanguageSwitcher,
	parameters: {
		// layout: "centered",
	},
	tags: ["autodocs"],
	args: {},
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Normal: Story = {
	args: {},
};
export const Short: Story = {
	args: {
        short: true
    },
};
