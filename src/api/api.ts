import axios from "axios";
import { ChannelInfo } from "../types/types";

export const getYoutubeSearchList = async (): Promise<Array<ChannelInfo>> => {
  const { data } = await axios.get(`http://localhost:4000/data`);
  return data;
};
