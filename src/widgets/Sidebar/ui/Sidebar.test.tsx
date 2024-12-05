
import { render, screen } from "@testing-library/react";
import { Sidebar } from "@/widgets/Sidebar";

describe("Sidebar", () => {
	test("test", () => {
		render(<Sidebar />);
		expect(screen.getByText("TEST")).toBeInTheDocument();
        screen.debug()
	});

});
