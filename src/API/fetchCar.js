import axios from 'axios';

async function fetchCars() {
  try {
    const url = "https://6501e5d0736d26322f5c7344.mockapi.io/adverts";
    const response = await axios.get(url);
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default fetchCars;