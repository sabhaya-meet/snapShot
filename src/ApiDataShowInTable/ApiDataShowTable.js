import React, { useEffect, useState } from "react";
import UserData from "./UserData";

export default function ApiDataShowTable() {
  const [users, setUsers] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/users";
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        setUsers(data);
      }
      //   console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, [API]);
  return (
    <>
      <h1>This is Api data show</h1>

      <table style={{ border: "2px solid black" }}>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
}
