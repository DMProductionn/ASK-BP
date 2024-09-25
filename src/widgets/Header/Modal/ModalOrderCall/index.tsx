import { CSSTransition } from 'react-transition-group';
import style from '../../../../app/Css/Header/header.module.css';
import React, { useState, useRef } from 'react';
import InputMask from 'react-input-mask';
import SendOrderCall from '../../../../features/SendOrderCall';
import CompletedCall from '../CompletedCall';

interface ModalOrderCallProps {
  show: boolean;
  onClose: () => void;
}

const ModalOrderCall: React.FC<ModalOrderCallProps> = ({ show, onClose }) => {
  const [phone, setPhone] = useState('');
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  return (
    <>
      <CSSTransition nodeRef={nodeRef} in={show} timeout={300} classNames="modal" unmountOnExit>
        <div ref={nodeRef} className={style.modal_backdrop} onClick={onClose}>
          <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
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
            <CompletedCall />
            {/* <p className="text-black text-center text-[20px] font-medium mb-[35px]">
              Заказать звонок
            </p>
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
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#8A8A8A]" htmlFor="phone">
                  Телефон
                </label>
                <InputMask
                  className="text-black border-b-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                  mask="+7 (999) 999-99-99"
                  value={phone}
                  onChange={handleChange}
                  placeholder="+7"></InputMask>
              </div>

              <div className="flex flex-col">
                <label className="text-[#8A8A8A] mb-[10px]" htmlFor="text">
                  Комментарий
                </label>
                <textarea
                  className="resize-none pl-[10px] h-[100px] text-black border-[1px] border-black max-w-[310px] w-full outline-none pb-[2px]"
                  name="text"></textarea>
              </div>
              <SendOrderCall />
            </div>
            <p className="text-black w-full max-w-[350px] text-[14px] mt-[12px] leading-5 mx-auto">
              <span className='text-[#8A8A8A]'>Нажимая на кнопку вы соглашаетесь</span> на обработку ваших персональных данных
            </p> */}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ModalOrderCall;
