import clsx from "clsx";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

import styles from "./Navbar.module.scss";
import { Modal } from "@/shared/ui/Modal/Modal";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev);
	}, []);
	return (
		<div className={clsx(styles.Navbar, className)}>
			<div className={styles.links}>
				<Button className={styles.link} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
					{t("login")}
				</Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident veritatis dolores doloribus aut, placeat laboriosam officiis cupiditate obcaecati facere fugiat tempora distinctio quos officia molestiae minus et ea repudiandae harum.
                </Modal>
			</div>
		</div>
	);
};
