import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  // const { status } = useAuthContext();
  const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } =
    useAuthContext();

  if (isChecking) {
    return <h1>Verificando usuario</h1>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            className="px-3 py-2 bg-amber-400 rounded-2xl"
            onClick={() => logout()}
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicacion</h3>
          <button
            className="px-3 py-2 bg-amber-400 rounded-2xl"
            onClick={() => loginWithEmailPassword("mtg@gmail.com", "123456")}
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};
