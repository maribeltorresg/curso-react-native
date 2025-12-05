// import { useUsers } from "../hooks/UseUsers"
import { useUsers } from "../hooks/UseUsers";
import { UserRow } from "./UserRow"

export const UsersPage = () => {
  // custom hoook
  const { users } = useUsers();
  console.log('users', users)

  return (
    <>
      <table className="w-[500px] rounded-xl bg-black/85 text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <UserRow/>
        </tbody>
      </table>
      <div className="flex justify-around w-[500px] mt-2">
        <button className="px-3 py-2 rounded-lg bg-amber-600">Anteriores</button>
        <button className="px-3 py-2 rounded-lg bg-amber-600">Siguientes</button>
      </div>
    </>
  )
}