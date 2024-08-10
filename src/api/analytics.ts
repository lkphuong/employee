import axios from "axios";

export const analytics = async (
  store: string,
  shift: number,
  type_day: number,
  seconds: number,
  time: number,
  revenue: number,
  avg_bill: number
): Promise<any> => {
  try {
    const response = await axios.post(
      "http://118.69.196.120:6001/api/analytics",
      {
        store,
        shift,
        type_day,
        seconds,
        time,
        revenue,
        avg_bill,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error during analytics: ", error);
    throw new Error("Failed to get analytics");
  }
};
