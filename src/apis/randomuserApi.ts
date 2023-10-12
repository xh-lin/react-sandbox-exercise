import axios from "axios";

const RANDOMUSER_API_URL = "https://randomuser.me/api";

export type UserData = {
  email: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
}

export const getRandomuser = async (n: number): Promise<UserData[]> => {
  const res = await axios.get(RANDOMUSER_API_URL, { params: { results: n } });
  const users: UserData[] = res.data.results;
  return users;
};

export const mockUserDataList = [
  {
    email: "jennie.nichols@example.com",
    name: {
      first: "Jennie",
      last: "Nichols"
    },
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }
  }
]