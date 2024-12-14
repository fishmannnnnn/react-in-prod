import { componentRender } from "@/shared/lib/tests/componentRender";
import { Sidebar } from "@/widgets/Sidebar";
import { fireEvent, screen } from "@testing-library/react";


describe("Sidebar", () => {
	test("test sidebar", () => {
        console.log(screen.debug(null, Infinity));
		componentRender(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});

	test("test sidebar toggle", () => {
		componentRender(<Sidebar />);
		const toggleBtn = screen.getByTestId("sidebar-toggle");
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
	});
});