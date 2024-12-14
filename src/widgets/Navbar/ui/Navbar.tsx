import clsx from "clsx";

import { AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";

import styles from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={clsx(styles.Navbar, className)}>
			<div className={styles.links}>
				<AppLink
					className={styles.mainLink}
					to="/"
					theme={AppLinkTheme.SECONDARY}
				>
					/
				</AppLink>
			</div>
		</div>
	);
};
