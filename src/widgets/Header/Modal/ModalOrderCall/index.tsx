import { CSSTransition } from 'react-transition-group';
import style from '../../../../app/Css/Header/header.module.css';
import React, { useState } from 'react';
import CompletedCall from '../CompletedCall';
import InputMask from 'react-input-mask';
import SendOrderCall from '../../../../features/SendOrderCall';
import useSendCall from '../../../../app/hooks/Send/useSendCall';
import Loader from '../../../../shared/Loader';

interface ModalOrderCallProps {
  show: boolean;
  onClose: () => void;
}

const ModalOrderCall: React.FC<ModalOrderCallProps> = ({ show, onClose }) => {
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(false);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const [_, setShowModalCompleted] = useState(false);

  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  const { mutate, isPending, isSuccess } = useSendCall();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value.replace(/[\s\-\(\)]/g, ''));
  };

  const onSubmitSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const send_call = {
      name: name,
      number: phone,
      comment: text,
    };
    if (phoneRegex.test(phone)) {
      setErrorPhone(false);
    } else {
      setErrorPhone(true);
    }
    mutate(send_call);
  };

  return (
    <>
      <CSSTransition in={show} timeout={300} classNames="modal" unmountOnExit>
        <div className={style.modal_backdrop} onClick={onClose}>
          {isSuccess ? (
            <CompletedCall onClose={() => setShowModalCompleted(false)} />
          ) : (
            <form
              onSubmit={onSubmitSend}
              className={style.modal_content}
              onClick={(e) => e.stopPropagation()}>
              {isPending ? (
                <div className="h-full w-full flex justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <>
                  <button
                    className="bg-transparent hover:bg-transparent absolute top-[15px] right-[15px]"
                    onClick={onClose}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 6L6 18"
                        stroke="#8A8A8A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="#8A8A8A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <p className="text-black text-center text-[20px] font-medium mb-[35px]">
                    Заказать звонок
                  </p>
                  <div className="flex flex-col gap-[25px] max-w-[350px] w-full mx-auto">
                    <div className="flex flex-col">
                      <label className="text-[#8A8A8A]" htmlFor="username">
                        Имя
                      </label>
                      <input
                        className="text-black border-b-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                        type="text"
                        id="username"
                        name="username"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[#8A8A8A]" htmlFor="phone">
                        Телефон
                      </label>
                      <InputMask
                        required
                        className="text-black border-b-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                        mask="+7 (999) 999-99-99"
                        value={phone}
                        onChange={handleChange}
                        placeholder="+7"></InputMask>
                      {errorPhone && <p className="text-red-500">Неверный формат номера</p>}
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[#8A8A8A] mb-[10px]" htmlFor="text">
                        Комментарий
                      </label>
                      <textarea
                        onChange={(e) => setText(e.target.value)}
                        className="resize-none pl-[10px] h-[100px] text-black border-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                        name="text"></textarea>
                    </div>
                    <SendOrderCall />
                  </div>
                  <p className="text-black w-full max-w-[350px] text-[14px] mt-[12px] leading-5 mx-auto">
                    <span className="text-[#8A8A8A]">Нажимая на кнопку вы соглашаетесь</span>{' '}
                    на обработку ваших персональных данных
                  </p>
                </>
              )}
            </form>
          )}
        </div>
      </CSSTransition>
    </>
  );
};

export default ModalOrderCall;
