"use client";

import React, { useState } from 'react';
import { usePaymentInputs } from "react-payment-inputs";
import images from 'react-payment-inputs/images';

export default function PaymentInputs() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');

  const { meta, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

  const handleChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleChangeExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  const handleChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCVC(e.target.value);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-24 space-y-4">
      <div className="space-y-1">
        <svg {...getCardImageProps({ images })} />
        <input
          className={`w-full text-sm text-slate-600 bg-white border appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white ${
            cardNumber && meta.erroredInputs.cardNumber && meta.touchedInputs.cardNumber
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-slate-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100'
          }`}
          {...getCardNumberProps({ onChange: handleChangeCardNumber })}
          value={cardNumber}
        />
        {cardNumber && meta.erroredInputs.cardNumber && meta.touchedInputs.cardNumber && 
          <p className="text-red-500 text-sm" role="alert" aria-live="polite">
            {meta.erroredInputs.cardNumber}
          </p>        
        }
      </div>
      <div className="flex space-x-4">
        <div className="space-y-1 w-1/2">
          <input
            className={`w-full text-sm text-slate-600 bg-white border appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 ${
              expiryDate && meta.erroredInputs.expiryDate && meta.touchedInputs.expiryDate
                ? 'border-red-500'
                : 'border-slate-300'
            }`}
            {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
            value={expiryDate}
          />
          {expiryDate && meta.erroredInputs.expiryDate && meta.touchedInputs.expiryDate && 
            <p className="text-red-500 text-sm" role="alert" aria-live="polite">
              {meta.erroredInputs.expiryDate}
            </p>
          }
        </div>
        <div className="space-y-1 w-1/2">
          <input
            className={`w-full text-sm text-slate-600 bg-white border appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 ${
              cvc && meta.erroredInputs.cvc && meta.touchedInputs.cvc
                ? 'border-red-500'
                : 'border-slate-300'
            }`}
            {...getCVCProps({ onChange: handleChangeCVC })}
            value={cvc}
          />
          {cvc && meta.erroredInputs.cvc && meta.touchedInputs.cvc && 
            <p className="text-red-500 text-sm" role="alert" aria-live="polite">
              {meta.erroredInputs.cvc}
            </p>
          }
        </div>
      </div>
    </div>
  );
}