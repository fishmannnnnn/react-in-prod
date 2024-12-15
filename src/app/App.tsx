import clsx from "clsx";
import { Suspense, useState } from "react";

import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "@/app/providers/router";
import { PageLoader } from "@/shared/ui/PageLoader/PageLoader";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

const App = () => {
	const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={clsx("app", theme)}>
			<Suspense fallback={<PageLoader />}>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
