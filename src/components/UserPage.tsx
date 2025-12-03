export const UserPage = () => {
  return (
    <>
      <h3></h3>
      <table className="w-[500px] rounded-xl bg-black/85 text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="" alt="User avatar" />
            </td>
            <td>{"Maribel"}</td>
            <td>{"Torres"}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}