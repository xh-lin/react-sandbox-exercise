import React from "react";
import User from "./User";
import { UserData } from "../apis/randomuserApi"

interface UsersProps {
    userDataList: UserData[];
}

function Users({ userDataList }: UsersProps) {
  return (
    <div className="container d-flex flex-wrap align-items-top">
      {userDataList.map((userData) => (
        <User key={`${userData.email}`} userData={userData} />
      ))}
    </div>
  );
}

export default Users;
