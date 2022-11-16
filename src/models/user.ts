
export interface User {
  id: number;
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  avatar: string,
}

export const mockUsers = [
  {
    "id": 1,
    "first_name": "Suzie",
    "last_name": "Kydd",
    "email": "skydd0@prnewswire.com",
    "gender": "Female",
    "avatar": "https://robohash.org/fugiatautemodit.png?size=50x50&set=set1"
  }
]

export const mockUser = {
  "id": 1,
  "first_name": "Suzie",
  "last_name": "Kydd",
  "email": "skydd0@prnewswire.com",
  "gender": "Female",
  "avatar": "https://robohash.org/fugiatautemodit.png?size=50x50&set=set1"
}


export type userContextTypes = {
  users: User[],
}
