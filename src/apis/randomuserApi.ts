import axios from "axios";

const RANDOMUSER_API_URL = "https://randomuser.me/api";

export type UserData = {
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export const getRandomuser = async (n: number): Promise<UserData[]> => {
  return axios.get(RANDOMUSER_API_URL, { params: { results: n } }).then((res) => {
    console.log(res);
    return res.data.results;
  }).catch((err) => {
    console.error(err);
    return [];
  });
};

export const mockUserDataList: UserData[] = [
  {
    email: "jennie.nichols@example.com",
    name: {
      title: "Miss",
      first: "Jennie",
      last: "Nichols"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }
  }
];
