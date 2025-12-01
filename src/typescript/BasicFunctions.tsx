const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

export const BasicFunctions = () => {
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de 2 + 8 = {addTwoNumbers(2, 8)}</span>
    </>
  );
};
