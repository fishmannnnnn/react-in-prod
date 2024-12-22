import clsx from "clsx";
import React, {
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

import { useTheme } from "@/app/providers/ThemeProvider";
import { Portal } from "@/shared/ui/Portal/Portal";

import styles from "./Modal.module.scss";

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const { theme } = useTheme();

	const mods: Record<string, boolean> = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing,
	};

	const handleClose = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const handleContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleClose();
			}
		},
		[handleClose],
	);
	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown);
		}
		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen, onKeyDown]);
	return (
		<Portal>
			<div className={clsx(styles.Modal, mods, className)}>
				<div className={styles.overlay} onClick={handleClose}>
					<div
						className={styles.content}
						onClick={handleContentClick}
					>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
