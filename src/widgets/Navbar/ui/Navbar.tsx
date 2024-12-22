import clsx from "clsx";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { LoginModal } from "@/features/AuthByUsename";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

import styles from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);


	return (
		<div className={clsx(styles.Navbar, className)}>
			<div className={styles.links}>
				<Button
					className={styles.link}
					theme={ButtonTheme.CLEAR_INVERTED}
					onClick={onShowModal}
				>
					{t("login")}
				</Button>
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			</div>
		</div>
	);
};
