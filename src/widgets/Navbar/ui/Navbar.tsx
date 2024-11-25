import clsx from "clsx";

import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

import styles from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={clsx(styles.Navbar, className)}>
			<ThemeSwitcher />
			<div className={styles.links}>
				<AppLink
					className={styles.mainLink}
					to="/"
					theme={AppLinkTheme.SECONDARY}
				>
					Главная
				</AppLink>
				<AppLink to="/about" theme={AppLinkTheme.RED}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};
