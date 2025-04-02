import React from 'react';
import ButtonLink from '../common/ButtonLink';

export default function PlanYourVisit() {
  return (
    <section className={`flex items-center justify-center py-[3rem] px-[1rem]`}>
      <div className={`flex flex-col gap-[1.25rem] w-full max-w-[1200px]`}>
        <h1 className="font-nickainley pb-[1rem] text-center">
          Plan Your Visit
        </h1>
        <div className="flex flex-col md:flex-row lg:justify-between gap-[1.5rem]">
          <div className="lg:w-[45%] flex flex-col gap-[1.25rem] max-w-[1000px]">
            <h2>How to Reserve & Play</h2>
            <ul className="flex flex-col gap-[1.15rem]">
              <li>
                1. <strong>Reserve Your Spot.</strong> Book your time slot
                through our reservation portal and complete your payment to
                secure your visit.
              </li>
              <li>
                2. <strong>Arrive & Check-In.</strong> Please arrive 10 minutes
                before your scheduled time to check in and get settled.
              </li>
              <li>
                3. <strong>Enjoy the Fun.</strong> Enjoy full access to our play
                studio for your 2-hour time slot — plenty of time for kids to
                explore, play, and create!
              </li>
              <li>
                4. <strong>Wrap-Up Time.</strong> We&apos;ll give a friendly
                reminder 10 minutes before your session ends. We ask that you
                begin gathering your kids and belongings so we can prepare for
                the next group.
              </li>
            </ul>
            <ButtonLink
              buttonText="Reserve Your Spot"
              buttonLink="https://thefunbug.as.me/?calendarID=11786092"
              buttonClass="bg-soft-blue hover:bg-worm-blue my-0"
              external={true}
            />
          </div>
          <div className="lg:w-[45%] flex flex-col gap-[1.25rem]">
            <h2>Our Reservation Schedule</h2>
            <h3 className="font-bold text-sm">
              Reservations are always recommended to ensure availability.
            </h3>
            <div className="flex gap-[1.25rem]">
              <p className="w-[160px]">Monday, Tuesday and Thursday</p>
              <p className="w-[160px]">
                10:15 am - 12:15 pm 12:15pm - 2:15pm 2:15pm - 4:15pm
              </p>
            </div>
            <div className="flex gap-[1.25rem]">
              <p className="w-[160px]">Wednesday and Friday</p>
              <p className="w-[160px]">
                9:15 am - 11:15am 11:15 am - 1:15pm 1:15pm - 3:15pm 3:15pm -
                5:15pm
              </p>
            </div>
            <div className="flex gap-[1.25rem]">
              <p className="w-[160px]">Saturday</p>
              <p className="w-[160px]">
                10:00 am - 12:00 pm 12:00 pm - 2:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
