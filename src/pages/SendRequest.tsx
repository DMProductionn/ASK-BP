import { useState } from 'react';
import InputMask from 'react-input-mask';
import SendRequestButton from '../features/SendRequestButton';
import useSendRequest from '../app/hooks/Send/useSendRequest';
import Loader from '../shared/Loader';

const SendRequest = () => {
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(false);
  const [lastName, setLastName] = useState('');
  const [firstnameAndSurname, setFirstnameAndSurname] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onChangePhone = (e: any) => {
    setPhone(e.target.value.replace(/[\s\-\(\)]/g, ''));
  };

  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  const send_message = {
    lastname: lastName,
    firstname_and_surname: firstnameAndSurname,
    number: phone,
    organization: organization,
    email: email,
    message: message,
  };

  const { mutate, isPending, isSuccess } = useSendRequest();

  const oSubmitSend = (e: any) => {
    e.preventDefault();
    if (phoneRegex.test(phone)) {
      setErrorPhone(false);
      mutate(send_message);
    } else {
      setErrorPhone(true);
    }
  };

  return (
    <>
      <h1 className="text-[30px] font-medium">Отправить заявку</h1>
      {isSuccess ? (
        <div className="bg-white min-h-[350px] h-full flex flex-col justify-center items-center mt-[30px]">
          <p className="text-[24px] font-medium text-center mb-[40px]">Ваша заявка принята</p>
          <p>Спасибо за заявку! Мы свяжемся с вами в ближайщее время</p>
          <button className="h-[50px] w-[170px] mt-[30px]">НА ГЛАВНУЮ</button>
        </div>
      ) : (
        <form
          onSubmit={oSubmitSend}
          className="px-[40px] h-auto w-full bg-white pt-[40px] pb-[20px] rounded-[4px] mt-[30px]">
          {isPending ? (
            <div className="w-full min-h-[350px] h-full flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              <div className="bg-white flex flex-wrap justify-between">
                <div>
                  <div className="flex flex-col gap-[25px]">
                    <div className="flex flex-col">
                      <label className="text-[#8A8A8A]" htmlFor="username">
                        Фамилия
                      </label>
                      <input
                        className="text-black border-b-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                        type="text"
                        id="username"
                        name="username"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[#8A8A8A]" htmlFor="phone">
                        Телефон
                      </label>
                      <InputMask
                        className="text-black border-b-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                        mask="+7 (999) 999-99-99"
                        required
                        value={phone}
                        onChange={onChangePhone}
                        placeholder="+7"></InputMask>
                      {errorPhone && <p className="text-red-500">Некорректный номер</p>}
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[#8A8A8A]" htmlFor="username">
                        Организация
                      </label>
                      <input
                        className="text-black border-b-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                        type="text"
                        id="username"
                        name="username"
                        onChange={(e) => setOrganization(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[25px]">
                  <div>
                    <label className="text-[#8A8A8A]" htmlFor="username">
                      Имя Отчество
                    </label>
                    <input
                      className="text-black border-b-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                      type="text"
                      id="username"
                      name="username"
                      required
                      onChange={(e) => setFirstnameAndSurname(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#8A8A8A]" htmlFor="username">
                      Электронная почта
                    </label>
                    <input
                      className="text-black border-b-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                      type="email"
                      id="username"
                      name="username"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="w-full max-w-[360px]">
                  <div className="flex flex-col">
                    <label className="text-[#8A8A8A] mb-[10px]" htmlFor="text">
                      Содержание сообщения
                    </label>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Сообщение..."
                      className="resize-none pl-[10px] h-[150px] text-black border-[1px] border-black w-full outline-none pb-[2px]"
                      name="text"></textarea>
                  </div>
                </div>
              </div>
              <SendRequestButton />
            </>
          )}
        </form>
      )}
    </>
  );
};

export default SendRequest;
