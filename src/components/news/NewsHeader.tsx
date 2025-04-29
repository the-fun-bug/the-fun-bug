import React from 'react';

export default function NewsHeader() {
  return (
    <section className="flex justify-center items-center pt-[1rem] pb-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1.25rem] w-full max-w-[750px]">
        <h1 className="font-nickainley pb-[1rem]">The Fun Bug News</h1>
        <p>
          Stay in the loop with all the buzz at The Fun Bug! Our monthly
          newsletter features upcoming events, indoor playground updates,
          seasonal drinks, and everything happening in our play studio and cafe.
        </p>
      </div>
    </section>
  );
}
