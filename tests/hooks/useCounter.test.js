import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"


describe('Pruebas en el useCounter', () => {
  test('debe retornar los valores por defecto', () => {
    //renderizando los hooks
    const {result} = renderHook( () => useCounter() );
    //desestructurando
    const {counter, decrement, increment, reset} = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  })

  test('debe generar el counter con el valor de 100', () => {
    const {result} = renderHook( () => useCounter(100) );
    expect(result.current.counter).toBe(100);

  })

  test('debe de incrementar el contador', () => {
    const {result} = renderHook( () => useCounter() );
    const {counter, increment} = result.current;

    act( () => {
      increment();
      increment(2);
    })

    expect(result.current.counter).toBe(12);

  })
  
  test('debe de decrementar el contador', () => {
    const {result} = renderHook( () => useCounter() );
    const {counter, decrement} = result.current;

    act( () => {
      decrement();
      decrement(2);
    })

    expect(result.current.counter).toBe(8);

  })

  test('debe de resetear el contador', () => {
    const {result} = renderHook( () => useCounter() );
    const {counter, reset} = result.current;

    act( () => {
      reset();
    })

    expect(result.current.counter).toBe(10);

  })
  
  
})
