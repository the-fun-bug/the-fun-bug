import React from 'react';
import Script from 'next/script';

export default function BookEvent() {
  return (
    <section className="flex justify-center items-center pt-[3rem] px-[1rem] gap-[1.25rem]">
      <div className="flex flex-col text-center gap-[1.25rem] w-full max-w-[1000px]">
        <h1 id="reserve" className="font-nickainley">
          Book Your Event
        </h1>
        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=33135518&ref=embedded_csp"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>
        <Script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></Script>
      </div>
    </section>
  );
}
