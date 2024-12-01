import clsx from "clsx";

import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={clsx(className)}
			theme={ButtonTheme.CLEAR}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
};
