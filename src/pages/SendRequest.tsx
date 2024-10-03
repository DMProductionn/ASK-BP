import { useState } from 'react';
import InputMask from 'react-input-mask';
import SendRequestButton from '../features/SendRequestButton';
import useSendRequest from '../app/hooks/Send/useSendRequest';
import Loader from '../shared/Loader';
import style from '../app/Css/SendRequest/send-request.module.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SendRequest = () => {
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(false);
  const [lastName, setLastName] = useState('');
  const [firstnameAndSurname, setFirstnameAndSurname] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onChangePhone = (e: any) => {
    setPhone(e.target.value.replace(/[\s\-\(\)]/g, ''));
  };

  const phoneRegex = /^\+7\d{10}$/;

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
          <p className="text-center">Спасибо за заявку! Мы свяжемся с вами в ближайщее время</p>
          <button onClick={() => navigate('/')} className="h-[50px] w-[170px] mt-[30px]">
            НА ГЛАВНУЮ
          </button>
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
              <div className={style.send_request_from}>
                <div className={style.first_info}>
                  <div className="flex flex-col gap-[25px]">
                    <div className="flex flex-col">
                      <label className="text-[#8A8A8A]" htmlFor="username">
                        Фамилия
                      </label>
                      <input
                        className={style.input}
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
                        className={style.input}
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
                        className={style.input}
                        type="text"
                        id="username"
                        name="username"
                        onChange={(e) => setOrganization(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className={`${style.second_info} flex flex-col gap-[25px]`}>
                  <div>
                    <label className="text-[#8A8A8A]" htmlFor="username">
                      Имя Отчество
                    </label>
                    <input
                      className={style.input}
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
                      className={style.input}
                      type="email"
                      id="username"
                      name="username"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className={`${style.third_info} w-full max-w-[360px]`}>
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
      <Helmet>
        <title>Отправить заявку</title>
        <meta
          name="description"
          content="Качественные смазочные материалы для надежной защиты узлов и деталей вашего оборудования. Обеспечьте долговечность и эффективность работы вашего оборудования."
        />
      </Helmet>
    </>
  );
};

export default SendRequest;
