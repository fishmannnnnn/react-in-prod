import clsx from "clsx";
import { Link } from "react-router-dom";

import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme";

import "./styles/index.scss";

const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={clsx("app", theme)}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to="/about">About</Link>
			<Link to="/">Main</Link>
		</div>
	);
};

export default App;
