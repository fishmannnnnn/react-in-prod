import clsx from "clsx";
import { Suspense } from "react";

import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import "./styles/index.scss";

const App = () => {
	const { theme } = useTheme();
	return (
		<div className={clsx("app", theme)}>
			<Suspense fallback={<div>Loading...</div>}>
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
