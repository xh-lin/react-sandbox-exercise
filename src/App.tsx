import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Users from "./components/Users";
import { getRandomuser, UserData, mockUserDataList } from "./apis/randomuserApi";

const USER_COUNT = 10;

export default function App() {
  const [userDataList, setUserDataList] = useState<UserData[]>([]);
  useEffect(() => {
    getRandomuser(USER_COUNT).then((users) => {
      setUserDataList(users);
    });
  }, []);

  return (
    <div>
      <Users userDataList={userDataList}></Users>
    </div>
  );
}
