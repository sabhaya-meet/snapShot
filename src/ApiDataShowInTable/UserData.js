import React from "react";

export default function UserData({ users }) {
  return (
    <>
      {users &&
        users.map((curUsers) => {
          const { id, name, email, address } = curUsers;

          return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{address.city}</td>
            </tr>
          );
        })}
    </>
  );
}
