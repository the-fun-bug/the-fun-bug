import React from 'react';
import Script from 'next/script';

export default function BookEvent() {
  return (
    <section
      id="reserve"
      className="flex justify-center items-center py-[3rem] md:px-[1rem] gap-[1rem]"
    >
      <div className="flex flex-col text-center gap-[1rem] w-full max-w-[1000px]">
        <h1 className="font-nickainley">Book Your Event</h1>
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
