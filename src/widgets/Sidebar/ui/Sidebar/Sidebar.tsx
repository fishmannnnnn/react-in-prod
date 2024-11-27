import clsx from "clsx";
import { useState } from "react";

import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => setCollapsed(prev => !prev);
	return (
		<div
			className={clsx(
				styles.Sidebar,
				collapsed && styles.collapsed,
				className,
			)}
		>
			<button onClick={onToggle}>Toggle</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher className={styles.lang} />
			</div>
		</div>
	);
};
