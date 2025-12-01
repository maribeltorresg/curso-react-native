interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}
interface Address {
  country: string;
  house: number;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 30,
    firstName: "Maribel",
    lastName: "Torres",
    address: {
      country: "Lima",
      house: 750,
    },
  };

  return (
    <>
      <h3>Objetos litrales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
