import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks/>', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter:1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading:true,
            hasError:null,
        });

        render(<MultipleCustomHooks />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Breaking Bad Quotes')) 

        const nextButton = screen.getByRole('button',{ name:'Next Quote' })

        expect( nextButton.disabled ).toBeTruthy();

        screen.debug();
    });

    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author:'Kevin', quote:'Hola Mundo' }],
            isLoading:false,
            hasError:null,
        });
        
        render(<MultipleCustomHooks />)
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Kevin') ).toBeTruthy();

        const nextButton = screen.getByRole('button',{ name:'Next Quote' });

        expect( nextButton.disabled ).toBeFalsy();

    });

    test('debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author:'Kevin', quote:'Hola Mundo' }],
            isLoading:false,
            hasError:null,
        });


        useCounter
        
        render(<MultipleCustomHooks />)

        const nextButton = screen.getByRole('button',{ name:'Next Quote' });

        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();
      
    })
    
    
    
  
})
