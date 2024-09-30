import http from "../Api/http";
import { ISendCall, ISendRequest } from "../types/sends.type";

export const sendRequest = async (send_request: ISendRequest) => {
  const res = await http.post('/sendrequest/add', send_request);
  return res.data;
}


export const sendCall = async (send_call: ISendCall) => {
  const res = await http.post('/callorder/add', send_call);
  return res.data;
}