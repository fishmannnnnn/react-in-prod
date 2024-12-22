import clsx from "clsx";

import { Modal } from "@/shared/ui/Modal/Modal";

import styles from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal
			className={clsx(styles.LoginModal, className)}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<LoginForm />
		</Modal>
	);
};
