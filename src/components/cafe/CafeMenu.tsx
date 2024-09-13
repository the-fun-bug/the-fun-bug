import React from 'react';
import Image from 'next/image';
import iceCubeImg from './img/ice-cube.png';
import brotherBlueTeaImg from './img/brother-blue-tea.png';
import buddyImg from './img/buddy.png';
import goGrueneImg from './img/go-gruene.png';
import helloCaramelloImg from './img/hello-caramello.png';
import ladybugImg from './img/ladybug.png';
import livieBugImg from './img/livie-bug.png';
import saurFlowerImg from './img/saur-flower.png';
import saurWormImg from './img/saur-worm.png';
import sugarMamaImg from './img/sugar-mama.png';
import buildYourOwnImg from './img/build-your-own.png';

export default function CafeMenu() {
  return (
    <section className="flex justify-center items-center py-[1.5rem] md:px-[1rem]">
      <div className="flex flex-col gap-[1rem] w-full max-w-[1000px]">
        <h1 className="font-nickainley">Menu</h1>
        <p>
          A selection of rotating snacks will also be available for purchase.
        </p>
        <Specialies />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] justify-between py-[2rem]">
          <BuildYourOwn />
          <SeasonalSpecialties />
        </div>
      </div>
    </section>
  );
}

function Specialies() {
  const drinks = [
    {
      drinkName: 'The Livie Bug',
      secondaryName: null,
      drinkDescription:
        'white grape juice, water, Tazo passion or hibiscus  tea, unsweetened coconut milk, freeze-dried or fresh sliced strawberries strawberry cold foam (Optional: simple syrup)',
      icedOnly: true,
      image: livieBugImg,
      alt: 'iced pink drink with a cateplliar behind it',
    },
    {
      drinkName: 'The Ladybug',
      secondaryName: 'iced strawberry latte',
      drinkDescription:
        'milk of choice*, strawberry syrup, espresso, strawberry cold foam',
      icedOnly: true,
      image: ladybugImg,
      alt: 'iced coffee drink with a lady bug behind it',
    },
    {
      drinkName: 'Brother Blue Tea',
      secondaryName: '',
      drinkDescription:
        'blueberry milk tea, jasmine tea, butterfly pea flower tea, water, condensed milk, milk, blueberry',
      icedOnly: true,
      image: brotherBlueTeaImg,
      alt: 'iced blue drink with an ant behind it',
    },
    {
      drinkName: 'The Buddy',
      secondaryName: 'iced mocha latte',
      drinkDescription:
        'cold brew, milk of choice*, mocha sauce, whipped cream, mocha sauce topping',
      icedOnly: true,
      image: buddyImg,
      alt: 'Iced coffee',
    },

    {
      drinkName: 'The Saur Flower',
      secondaryName: 'lavender latte (hot or iced)',
      drinkDescription:
        'milk of choice*, lavender syrup, vanilla extract, espresso, lavender cold foam (iced drinks only)',
      icedOnly: false,
      image: saurFlowerImg,
      alt: 'coffee cup with flower on it',
    },
    {
      drinkName: 'Sugar Mama',
      secondaryName: 'iced brown sugar latte',
      drinkDescription:
        'milk of choice*, brown sugar, water, vanilla, espresso, cinnamon',
      icedOnly: true,
      image: sugarMamaImg,
      alt: 'iced coffee',
    },
    {
      drinkName: 'Go Gruene',
      secondaryName: 'matcha tea latte (hot or iced)',
      drinkDescription: 'milk of choice*, sugar, match powder',
      icedOnly: false,
      image: goGrueneImg,
      alt: 'match tea latte in a cup',
    },
    {
      drinkName: 'Hello Caramello',
      secondaryName: 'caramel machiatto',
      drinkDescription:
        'milk of choice*, espresso, vanilla syrup, caramel sauce',
      icedOnly: false,
      image: helloCaramelloImg,
      alt: 'coffee cup',
    },
    {
      drinkName: 'The Saur Worm',
      secondaryName: 'iced house made lemonade',
      drinkDescription: 'choice of optional flavor, sour gummy worms',
      icedOnly: true,
      image: saurWormImg,
      alt: 'iced lemonade with a worm behind it',
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-cafe-pink">Specialties</h2>
        <div className="flex-flex-col gap-[0.5rem]">
          <div className="flex justify-between w-[205px]">
            <p>Hot drinks (12oz)</p>
            <p>$4.50</p>
          </div>
          <div className="flex justify-between w-[205px]">
            <p>Iced drinks (20oz)</p>
            <p>$4.95</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-[2rem] py-[1rem]">
          {drinks.map((d) => (
            <div
              key={d.drinkName}
              className="flex justify-between items-center gap-[1rem] max-w-[450px]"
            >
              <div>
                <div className="flex gap-[0.5rem]">
                  <h2>{d.drinkName}</h2>
                  {d.icedOnly && (
                    <Image
                      src={iceCubeImg}
                      alt="ice cube"
                      height={80}
                      width={80}
                      className="w-[25px]"
                    />
                  )}
                </div>
                {d.secondaryName && <p>{d.secondaryName}</p>}
                <p>{d.drinkDescription}</p>
              </div>
              <Image src={d.image} alt={d.alt} className="max-w-[96px]" />
            </div>
          ))}
        </div>
        <div className="flex gap-[0.5rem]">
          <Image
            src={iceCubeImg}
            alt="ice cube"
            height={80}
            width={80}
            className="w-[25px]"
          />
          <p>this drink only comes iced</p>
        </div>
        <p className="max-w-[400px]">
          * whole milk, 2% milk, lactose free milk, almond milk and oat milk are
          available upon request
        </p>
      </div>
    </div>
  );
}

function BuildYourOwn() {
  const flavors = [
    'almond*',
    'blueberry',
    'caramel*',
    'cinnamon',
    'french vanilla*',
    'hazelnut*',
    'honey',
    'lavender*',
    'peach*',
    'raspberry*',
    'rose',
    'strawberry',
  ];
  const milks = [
    'whole milk',
    '2% milk',
    'lactose free millk',
    'almond milk',
    'oat milk',
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-cafe-pink">Build Your Own</h2>
        <div className="flex-flex-col gap-[0.5rem]">
          <div className="flex justify-between w-[205px]">
            <p>Latte (hot or iced)</p>
            <p>$4.75</p>
          </div>
          <div className="flex justify-between w-[205px]">
            <div className="flex gap-[0.5rem]">
              <p>Iced Tea</p>
              <Image
                src={iceCubeImg}
                alt="ice cube"
                height={80}
                width={80}
                className="w-[25px]"
              />
            </div>
            <p>$4.75</p>
          </div>
        </div>
        <div>
          <h3>Step 1 - Select your flavor(s)</h3>
          <p>*Sugar free available</p>
        </div>
        <div className="grid grid-cols-2">
          {flavors.map((f) => (
            <p key={f}>{f}</p>
          ))}
        </div>
        <h3>Step 2 - Select your milk</h3>
        <div>
          {milks.map((f) => (
            <p key={f}>{f}</p>
          ))}
        </div>
      </div>
      <div className="flex gap-[2rem] items-center">
        <h3>Step 3 - Enjoy!</h3>
        <Image
          src={buildYourOwnImg}
          alt="Fun Bug worm behind iced drink"
          className="max-w-[96px]"
        />
      </div>
    </div>
  );
}

function SeasonalSpecialties() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-cafe-pink">Seasonal Specialties</h2>
        <div className="flex-flex-col gap-[0.5rem]">
          <div className="flex justify-between w-[205px]">
            <p>Hot drinks (12oz)</p>
            <p>$5.00</p>
          </div>
          <div className="flex justify-between w-[205px]">
            <p>Iced drinks (20oz)</p>
            <p>$5.25</p>
          </div>
        </div>
      </div>
    </div>
  );
}
