'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';

export default function BookEvent() {
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadScript(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    const iframe = document.getElementById('booking-iframe');
    if (iframe) observer.observe(iframe);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reserve"
      className="flex justify-center items-center pt-12 px-4 gap-5"
    >
      <div className="flex flex-col text-center gap-[1.25rem] w-full max-w-[1000px]">
        <h1 className="font-nickainley">Book Your Event</h1>
        <iframe
          id="booking-iframe"
          src="https://app.acuityscheduling.com/schedule.php?owner=33135518&ref=embedded_csp"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin allow-forms"
          loading="lazy"
        ></iframe>
        {loadScript && (
          <Script
            src="https://embed.acuityscheduling.com/js/embed.js"
            type="text/javascript"
            strategy="lazyOnload"
          />
        )}
      </div>
    </section>
  );
}
