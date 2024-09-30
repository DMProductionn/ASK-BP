import { useMutation } from "@tanstack/react-query"
import { ISendCall } from "../../types/sends.type"
import { sendCall } from "../../services/send.service"

const useSendCall = () => {
  return useMutation({
    mutationKey: ['sendCall'],
    mutationFn: (send_call: ISendCall) => sendCall(send_call),
  })
}

export default useSendCall;