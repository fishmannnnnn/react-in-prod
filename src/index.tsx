import { render } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

import App from "@/app/App";
import { StoreProvider } from "@/app/providers/StoreProvider";
import ThemeProvider from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import "@/app/styles/index.scss";
import "@/shared/config/i18n/i18n";
import { ErrorPage } from "@/widgets/ErrorPage";

render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary
				FallbackComponent={ErrorPage}
				onReset={() => location.reload()}
			>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>,

	document.getElementById("root"),
);
