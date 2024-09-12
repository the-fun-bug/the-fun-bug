import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import ButtonLink from '@/components/common/ButtonLink';

export default function NotFound() {
  return (
    <GlobalLayout>
      <div className="flex flex-col items-center justify-center gap-[2rem] h-[calc(100vh-252px)]">
        <h1 className="font-nickainley text-center max-w-[390px]">
          Oops! There’s Not a Page Here.
        </h1>
        <ButtonLink
          buttonText="Back To Homepage"
          buttonLink="/"
          buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
        />
      </div>
    </GlobalLayout>
  );
}
