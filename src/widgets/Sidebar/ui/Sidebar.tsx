import clsx from "clsx";
import { useState } from "react";

import { Button } from "@/shared/ui/Button/Button";
import { LanguageSwitcher } from "@/shared/ui/LanguageSwitcher";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => setCollapsed(prev => !prev);
	return (
		<div
			data-testid="sidebar"
			className={clsx(
				styles.Sidebar,
				collapsed && styles.collapsed,
				className,
			)}
		>
			<Button data-testid="sidebar-toggle" onClick={onToggle}>
				Toggle
			</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher className={styles.lang} />
			</div>
		</div>
	);
};
