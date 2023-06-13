import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../src/09-useContext/MainApp";

describe('Pruebas en Main.jsx', () => {
    test('debe de mostrar el Home Page', () => {
        
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();

    });

    test('debe de mostrar el Login Page', () => {
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();

    });
    
  
})
