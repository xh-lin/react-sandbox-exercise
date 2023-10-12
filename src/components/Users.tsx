import React from "react";
import User from "./User";
import { UserData } from "../apis/randomuserApi"

interface UsersProps {
    userDataList: UserData[]
}

function Users({ userDataList }: UsersProps) {
  return (
    <>
      {userDataList.map((userData) => (
        <User key={`${userData.email}`} userData={userData} />
      ))}
    </>
  );
}

export default Users;