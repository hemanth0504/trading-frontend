import axios from "axios";

export const dataType = "Time Series (Daily)";

const fetchData = async (keyword, symbol) => {
  try {
    const response = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: keyword,
        symbol: symbol,
        apikey: import.meta.env.VITE_ALPHAVANTAGE_API_KEY,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchData;
