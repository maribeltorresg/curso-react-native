// import { BasicType } from "./typescript/BasicTypes";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { Counter } from "./components/Counter";
// import { LoginPage } from "./components/LoginPage";
// import { UsersPage } from "./components/UsersPage";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";
import { FormsPage } from "./components/FormsPage";

function App() {
  return (
    <AuthProvider>
      <div className="flex justify-center flex-col items-center h-svh">
        <h1 className="font-bold underline text-3xl">React + TS</h1>
        {/* <BasicType/> */}
        {/* <ObjectLiterals/> */}
        {/* <BasicFunctions/> */}
        {/* <Counter /> */}
        {/* <LoginPage/> */}
        {/* <UsersPage/> */}
        <FormsPage/>
      </div>
    </AuthProvider>
  );
}

export default App;
