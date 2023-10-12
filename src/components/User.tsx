import React from "react";
import { UserData } from "../apis/randomuserApi"

interface UserProps {
    userData: UserData;
}

function User({ userData }: UserProps) {
  return (
    <>
      <img src={userData.picture.thumbnail}></img>
      <ul>
        <li>{userData.name.first}</li>
        <li>{userData.name.last}</li>
        <li>{userData.email}</li>
      </ul>
    </>
  );
}

export default User;