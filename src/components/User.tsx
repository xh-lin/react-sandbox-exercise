import React from "react";
import { UserData } from "../apis/randomuserApi"

interface UserProps {
    userData: UserData;
}

function User({ userData }: UserProps) {
  return (
    <>
      <div className="card" style={{ width: '10rem', margin: '5px' }}>
        <img src={userData.picture.large} className="card-img-top" alt="thumbnail"></img>
        <div className="card-body">
          <h5 className="card-title">{`${userData.name.first} ${userData.name.last}`}</h5>
          <a href={userData.email} className="card-link">{userData.email}</a>
        </div>
      </div>
    </>

  );
}

export default User;
