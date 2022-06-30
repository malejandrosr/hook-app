import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe("Pruebas en <MainApp />", () => {
	test("Debe de mostrar <HomePage />", () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText("Home Page")).toBeTruthy();
	});

	test("Debe de mostrar <LoginPage />", () => {
		render(
			<MemoryRouter initialEntries={["/login"]}>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText("Login Page")).toBeTruthy();
	});
});
