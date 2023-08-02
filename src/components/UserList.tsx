import { Result } from '@/core/interfaces';

interface Props {
  users: Result[];
}

export default function UserList({ users }: Props): JSX.Element {
  if (!users) return <></>;
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Pais</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.login.uuid}>
              <td className="flex justify-center">
                <img
                  width={40}
                  height={40}
                  className="rounded-full m-2"
                  src={user.picture.large}
                  alt={user.name.first}
                />
              </td>
              <td className="text-center">{user.name.first}</td>
              <td className="text-center">{user.name.last}</td>
              <td className="text-center">{user.location.country}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
