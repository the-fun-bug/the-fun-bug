'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import plusSignImg from './img/plus.png';
import minusSignImg from './img/minus.png';

export default function FrequentlyAskedQuestions() {
  const [openQuestion, setOpenQuestion] = useState<null | number>(null);

  const questions = [
    {
      question: 'How long can we stay and play?',
      answer:
        'There is no time limit for playing during our open play hours. Admission is good for the day! Just let our team know if you plan to leave and return in the same day.',
    },
    {
      question: 'Is there an age limit for playing?',
      answer:
        'Our play studio is open to all children ages 12 and younger. We just ask that older children are careful around our younger children, and avoid rough playing.',
    },
    {
      question: 'Can we drop off our kids to let them play?',
      answer:
        'Parents must remain with their children for the duration of the visit, and are responsible for watching them as well.',
    },
    {
      question: 'Do you have high chairs and booster seats for use?',
      answer:
        'Yes! We have several high chairs and booster seats for our guests to utilize.',
    },
    {
      question: 'What is your shoe policy?',
      answer:
        'Shoes may be worn on the wood floor, but we ask that socks only are worn past and on the turf flooring and play area. Bare feet are not allowed, as we do our best to maintain the cleanest environment for our guests. If you forget your child’s socks, you may purchase a pair at our counter.',
    },
    {
      question: 'Can I bring outside food or snacks?',
      answer:
        'Outside food and drinks are permitted but must stay on the wood floor area of the facility. No food or drink is allowed past or on the turf flooring and okay structures.',
    },
    {
      question: 'What is your policy is sick children?',
      answer:
        'We kindly ask that if your child or children are sick or not feeling well, you keep them home and wait until they are well to come and play. The health and safety of all of our friends is our top priority.',
    },
    {
      question: 'Do you accept cash and credit cards?',
      answer: 'Cash and all major debit/credit cards are accepted for payment.',
    },
  ];

  return (
    <section
      id="faqs"
      className="flex justify-center items-center py-[3rem] px-[1rem]"
    >
      <div className="flex flex-col gap-[1.25rem] w-full max-w-[1200px]">
        <h1 className="font-nickainley pb-[1.5rem]">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-x-[3rem] gap-y-[1rem]">
          {questions.map((q, i) => (
            <button
              key={i}
              onClick={() => {
                if (openQuestion === i) {
                  setOpenQuestion(null);
                } else {
                  setOpenQuestion(i);
                }
              }}
            >
              <div
                className={`flex flex-row sm:flex-row justify-between gap-[1.25rem] items-center pb-[1rem]`}
              >
                <p className="font-semibold text-left text-black">
                  {q.question}
                </p>
                <Image
                  src={i === openQuestion ? minusSignImg : plusSignImg}
                  alt="open/close button"
                  width={40}
                  height={40}
                  className="w-[15px] h-[15px]"
                />
              </div>
              <p
                className={`text-left text-black pr-[30px] ${
                  openQuestion === i ? 'block' : 'hidden'
                }`}
              >
                {q.answer}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
