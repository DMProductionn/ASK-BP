import { useMutation } from "@tanstack/react-query"
import { sendRequest } from "../../services/send.service"
import { ISendRequest } from "../../types/sends.type"

const useSendRequest = () => {
  return useMutation({
    mutationKey: ['sendRequest'],
    mutationFn: (send_request: ISendRequest) => sendRequest(send_request),
  })
}

export default useSendRequest