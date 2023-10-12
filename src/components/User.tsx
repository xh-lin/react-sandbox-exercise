import React from "react";
import { UserData } from "../apis/randomuserApi"

interface UserProps {
    userData: UserData;
}

function User({ userData }: UserProps) {
  return (
    <>
      <img src={userData.thumbnail}></img>
      <ul>
        <li>{userData.firstname}</li>
        <li>{userData.lastname}</li>
        <li>{userData.email}</li>
      </ul>
    </>
  );
}

export default User;