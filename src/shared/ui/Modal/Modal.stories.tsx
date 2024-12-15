import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import type { Meta, StoryObj } from "@storybook/react";



import { Modal } from "./Modal";


const meta: Meta<typeof Modal> = {
	title: "shared/Modal",
	component: Modal,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
	args: {
        isOpen: true,
		children:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur fugit voluptate et minus, placeat fuga esse ad sequi exercitationem fugiat maiores, assumenda error maxime harum consequatur eum. Ducimus, exercitationem",
	},
};

export const Dark: Story = {
	args: {
		isOpen: true,
		children:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur fugit voluptate et minus, placeat fuga esse ad sequi exercitationem fugiat maiores, assumenda error maxime harum consequatur eum. Ducimus, exercitationem",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};