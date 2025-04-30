'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import plusSignImg from './img/plus.png';
import minusSignImg from './img/minus.png';

export default function FrequentlyAskedQuestions() {
  const [openQuestion, setOpenQuestion] = useState<null | number>(null);

  const questions = [
    {
      question: 'Why are reservations recommended? Can I just walk in instead?',
      answer:
        'Reservations help us manage capacity to ensure a safe and enjoyable experience for everyone. Our space is subject to fire code regulations, which limit the number of guests we can accommodate at one time. By reserving your spot, you guarantee entry and avoid potential disappointment if we reach capacity. While we welcome walk-ins, availability is not guaranteed — a reservation is the best way to secure your visit.',
    },
    {
      question: 'Is there an age limit for playing?',
      answer:
        'Our play studio is open to all children ages 12 and under. We just ask that older children are mindful of younger ones and avoid rough play.',
    },
    {
      question: 'Can we drop off our kids to let them play?',
      answer:
        'Parents or guardians must remain with their children for the duration of the visit and are responsible for supervising them.',
    },
    {
      question: 'Do you have high chairs and booster seats for use?',
      answer:
        'Yes! We have several high chairs and booster seats available for our guests to use.',
    },
    {
      question: 'What is your shoe policy?',
      answer:
        'Shoes may be worn on the wood floor, but only socks are allowed on the turf flooring and play area (for both children and adults). Bare feet are not permitted, as we strive to maintain a clean environment for all guests. If you forget socks, we have both adult and children’s socks available for $3.',
    },
    {
      question: 'Can I bring outside food or snacks?',
      answer:
        'Outside food and drinks are permitted but must remain on the wood floor area of the facility. No food or drink is allowed on or past the turf flooring and play structures.',
    },
    {
      question: 'What is your policy on sick children?',
      answer:
        'We kindly ask that if your child is sick or not feeling well, you keep them home until they have fully recovered. The health and safety of all our guests is our top priority.',
    },
    {
      question: 'Do you accept cash and credit cards?',
      answer:
        'Yes, we accept cash and all major debit and credit cards for payment.',
    },
  ];

  return (
    <section
      id="faqs"
      className="flex justify-center items-center py-[3rem] px-[1rem]"
    >
      <div className="flex flex-col gap-[1.25rem] w-full max-w-[1200px]">
        <h2 className="font-nickainley pb-[1.5rem]">
          Frequently Asked Questions
        </h2>
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
                  loading="lazy"
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
