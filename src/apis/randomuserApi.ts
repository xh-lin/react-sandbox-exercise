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
  return axios.get(RANDOMUSER_API_URL, { params: { results: n } }).then((res) => {
    return res.data.results;
  }).catch((err) => {
    console.error(err);
    return [];
  });
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