import { render } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import { ErrorPage } from "@/widgets/ErrorPage";

import App from "./app/App";
import "./shared/config/i18n/i18n";

render(
	<BrowserRouter>
		<ErrorBoundary
			FallbackComponent={ErrorPage}
			onReset={() => location.reload()}
		>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById("root"),
);
