import "./styles.css";
import Users from "./components/Users";
import { mockUserDataList } from "./apis/randomuserApi";

export default function App() {
  return (
    <div className="App">
      <Users userDataList={mockUserDataList}></Users>
    </div>
  );
}
