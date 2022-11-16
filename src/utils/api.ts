const base_URL = "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

const getUsers = async () => {
  const res = await fetch(base_URL);
  return res.json();
}

export { getUsers }
