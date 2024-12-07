import clsx from "clsx";
import { Suspense } from "react";

import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "@/app/providers/router";
import { PageLoader } from "@/shared/ui/PageLoader/PageLoader";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import "./styles/index.scss";

const App = () => {
	const { theme } = useTheme();
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
