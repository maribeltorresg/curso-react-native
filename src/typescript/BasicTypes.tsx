export const BasicType = () => {
  const name: string = "Maribel";
  const age: number = 30;
  const isActive: boolean = true;
	const powers: string[] = ['React', 'React Native', 'Astro'];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age} - {isActive ? "Activo" : "No activo"}
			<p>{powers.join(', ')}</p>
    </>
  );
};
