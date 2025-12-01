// import { BasicType } from "./typescript/BasicTypes";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { Counter } from "./components/Counter";
import { AuthProvider } from "./context/AuthContext";
import { LoginPage } from "./components/LoginPage";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="flex justify-center flex-col items-center h-svh">
        <h1 className="font-bold underline text-3xl">React + TS</h1>
        {/* <BasicType/> */}
        {/* <ObjectLiterals/> */}
        {/* <BasicFunctions/> */}
        {/* <Counter /> */}
        <LoginPage/>
      </div>
    </AuthProvider>
  );
}

export default App;
