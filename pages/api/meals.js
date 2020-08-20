import axios from "axios";
export default async (req, res) => {
  try {
    const data = await axios.get(
      "https://5f3ed66c13a9640016a69219.mockapi.io/api/meals"
    );
    res.statusCode = 200;
    res.send(data.data);
  } catch (err) {
    res.statusCode = 500;
    res.send(err.message);
  }
};
