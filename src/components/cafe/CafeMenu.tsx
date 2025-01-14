import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import chaiThereImg from './img/chai-there.png';
import lotusLogo from './img/lotus-logo.png';

export default function CafeMenu() {
  return (
    <section
      id="menu"
      className="flex justify-center items-center py-[3rem] px-[1rem]"
    >
      <div className="flex flex-col gap-[1rem] w-full max-w-[1200px] mb-[1rem]">
        <h1 className="font-nickainley">Menu</h1>
        <Specialties />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.25rem] justify-between py-[2rem]">
          <BuildYourOwn />
          <div className="flex flex-col gap-[3rem]">
            <SeasonalSpecialties />
            <Beverages />
            <LightBites />
          </div>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  const houseSpecialties = [
    {
      type: 'coffee',
      drinks: [
        {
          drinkName: 'The Ladybug',
          secondaryName: 'iced strawberry latte',
          drinkDescription:
            'milk of choice*, strawberry syrup, espresso, strawberry cold foam',
          icedOnly: true,
          image: ladybugImg,
          drinkType: 'tall',
          alt: 'iced coffee drink with a lady bug behind it',
        },
        {
          drinkName: 'The Buddy',
          secondaryName: 'iced mocha latte',
          drinkDescription:
            'cold brew, milk of choice*, mocha sauce, whipped cream, mocha sauce topping',
          icedOnly: true,
          image: buddyImg,
          drinkType: 'tall',
          alt: 'Iced coffee',
        },
        {
          drinkName: 'The Saur Flower',
          secondaryName: 'lavender latte (hot or iced)',
          drinkDescription:
            'milk of choice*, lavender syrup, vanilla extract, espresso, lavender cold foam (iced drinks only)',
          icedOnly: false,
          image: saurFlowerImg,
          drinkType: 'short',
          alt: 'coffee cup with flower on it',
        },
        {
          drinkName: 'Sugar Mama',
          secondaryName: 'iced brown sugar latte',
          drinkDescription:
            'milk of choice*, brown sugar, vanilla, espresso, cinnamon',
          icedOnly: true,
          image: sugarMamaImg,
          drinkType: 'tall',
          alt: 'iced coffee',
        },
        {
          drinkName: 'Hello Caramello',
          secondaryName: 'caramel machiatto (hot or iced)',
          drinkDescription:
            'milk of choice*, espresso, vanilla syrup, caramel sauce',
          icedOnly: false,
          image: helloCaramelloImg,
          drinkType: 'short',
          alt: 'coffee cup',
        },
      ],
    },
    {
      type: 'tea',
      drinks: [
        {
          drinkName: 'Go Gruene',
          secondaryName: 'matcha tea latte (hot or iced)',
          drinkDescription:
            'milk of choice*, matcha powder, and optional flavor add in',
          icedOnly: false,
          image: goGrueneImg,
          drinkType: 'short',
          alt: 'match tea latte in a cup',
        },
        {
          drinkName: 'Chai There',
          secondaryName: 'chai tea latte (hot or iced)',
          drinkDescription: 'milk of choice*, chai tea',
          icedOnly: false,
          image: chaiThereImg,
          drinkType: 'short',
          alt: 'coffee cup with cardamom on the front and cinnamon',
        },
      ],
    },
    {
      type: 'refreshers',
      drinks: [
        {
          drinkName: 'The Livie Bug',
          secondaryName:
            'pink Lotus energy refresher infused with red raspberry and tart cherry',
          drinkDescription: 'available in sugar free upon request',
          icedOnly: true,
          image: livieBugImg,
          drinkType: 'tall',
          alt: 'iced pink drink with a caterpillar behind it',
        },
        {
          drinkName: 'Brother Blue',
          secondaryName: '',
          drinkDescription:
            'blue Lotus energy refresher infused with blueberry and acai super fruits',
          icedOnly: true,
          image: brotherBlueTeaImg,
          drinkType: 'tall',
          alt: 'iced blue drink with an ant behind it',
        },
        {
          drinkName: 'The Saur Worm',
          secondaryName: 'Lotus energy lemonade',
          drinkDescription:
            'available in sugar free or caffeine free upon request',
          icedOnly: true,
          image: saurWormImg,
          drinkType: 'tall',
          alt: 'iced lemonade with a worm behind it',
        },
      ],
    },
  ];

  const colOne = houseSpecialties.filter((s) => s.type === 'coffee');
  const colTwo = houseSpecialties.filter(
    (s) => s.type === 'tea' || s.type === 'refreshers'
  );

  return (
    <div className="w-full">
      <div className="flex flex-col gap-[1.25rem]">
        <h2 className="text-cafe-pink">House Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center justify-between">
          <div className="flex flex-row flex-wrap md:justify-between gap-[2rem] md:max-w-[85%]">
            <div>
              <div className="flex justify-between w-[205px]">
                <p>Hot drinks (16oz)</p>
                <p>$5.00</p>
              </div>
              <div className="flex justify-between w-[205px]">
                <p>Iced drinks (20oz)</p>
                <p>$5.25</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between w-[205px]">
                <p>Cold Foam</p>
                <p>+ $0.75</p>
              </div>
              <div className="flex justify-between w-[205px]">
                <p>Plant-based Milk</p>
                <p>+ $0.50</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] md:max-w-[85%]">
            <div className="flex gap-[0.75rem]">
              <Image
                src={iceCubeImg}
                alt="ice cube"
                height={80}
                width={80}
                className="w-[25px]"
                placeholder="blur"
              />
              <p>this drink only comes iced</p>
            </div>
            <p className="max-w-[450px]">
              * whole milk, 2% milk, almond milk and oat milk are available upon
              request
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {/* First Column */}
          <div className="md:max-w-[85%] sm:max-w-[80%]">
            {colOne.map((s) => (
              <div key={s.type}>
                <h3 className="uppercase text-cafe-pink mt-[1rem] mb-[1rem]">
                  {s.type}
                </h3>
                {s.drinks.map((d) => (
                  <div
                    key={d.drinkName}
                    className="flex justify-between items-center gap-[1.25rem] mb-[2.5rem]"
                  >
                    <div>
                      <div className="flex gap-[0.75rem]">
                        <h2>{d.drinkName}</h2>
                        {d.icedOnly && (
                          <Image
                            src={iceCubeImg}
                            alt="ice cube"
                            height={80}
                            width={80}
                            className="w-[25px]"
                            placeholder="blur"
                          />
                        )}
                      </div>
                      {d.secondaryName && <p>{d.secondaryName}</p>}
                      <p>{d.drinkDescription}</p>
                    </div>
                    <Image
                      src={d.image}
                      alt={d.alt}
                      className="max-w-[96px]"
                      placeholder="blur"
                      {...(d.drinkType === 'short'
                        ? { height: 156, width: 190 }
                        : { height: 200, width: 178 })}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="md:max-w-[85%] sm:max-w-[80%]">
            {colTwo.map((s) => (
              <div key={s.type}>
                <h3
                  className={`uppercase text-cafe-pink mb-[1rem] ${s.type === 'refreshers' ? 'mt-[2rem]' : 'mt-[1rem]'}`}
                >
                  {s.type}
                </h3>
                {s.type === 'refreshers' && (
                  <div className="flex items-center gap-[1rem] mb-[1rem]">
                    <Image
                      src={lotusLogo}
                      width={100}
                      height={105}
                      className="max-w-[75px]"
                      alt="Lotus energy drinks logo"
                      placeholder="blur"
                    />
                    <p>
                      We proudly use{' '}
                      <Link
                        href="https://lotusenergydrinks.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Lotus
                      </Link>{' '}
                      plant-based energy concentrate, mixed with carbonated
                      water for a refreshing boost.
                    </p>
                  </div>
                )}
                {s.drinks.map((d) => (
                  <div
                    key={d.drinkName}
                    className="flex justify-between items-center gap-[1.25rem] mb-[0.5rem]"
                  >
                    <div>
                      <div className="flex gap-[1rem]">
                        <h2>{d.drinkName}</h2>
                        {d.icedOnly && (
                          <Image
                            src={iceCubeImg}
                            alt="ice cube"
                            height={80}
                            width={80}
                            className="w-[25px]"
                            placeholder="blur"
                          />
                        )}
                      </div>
                      {d.secondaryName && <p>{d.secondaryName}</p>}
                      <p>{d.drinkDescription}</p>
                    </div>
                    <Image
                      src={d.image}
                      alt={d.alt}
                      className="max-w-[96px]"
                      {...(d.drinkType === 'short'
                        ? { height: 156, width: 190 }
                        : { height: 200, width: 178 })}
                      placeholder="blur"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
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
  const milks = ['whole milk', '2% milk', 'almond milk', 'oat milk'];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-[1.25rem]">
        <h2 className="text-cafe-pink">Build Your Own Latte</h2>
        <div className="flex justify-between w-[205px]">
          <div>
            <div className="flex justify-between w-[205px]">
              <p>Hot (16oz)</p>
              <p>$5.00</p>
            </div>
            <div className="flex justify-between w-[205px]">
              <p>Iced (20oz)</p>
              <p>$5.25</p>
            </div>
          </div>{' '}
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
          width={178}
          height={200}
          placeholder="blur"
        />
      </div>
    </div>
  );
}

function SeasonalSpecialties() {
  const seasonalDrinks = [];
  return (
    <div className="w-full scroll-pt-[100px]">
      <div className="flex flex-col gap-[1.25rem]">
        <h2 id="seasonal" className="text-cafe-pink snap-start">
          Seasonal Specialties
        </h2>
        <div>
          <div className="flex justify-between w-[205px]">
            <p>Hot drinks (12oz)</p>
            <p>$5.25</p>
          </div>
          <div className="flex justify-between w-[205px]">
            <p>Iced drinks (20oz)</p>
            <p>$5.50</p>
          </div>
        </div>
        {!seasonalDrinks.length && (
          <p className="italic">
            New seasonal flavors are on the way! We have a rotating selection of
            drinks for each season. Check back soon or follow our news page for
            the latest on our menu updates.
          </p>
        )}
      </div>
    </div>
  );
}

function Beverages() {
  return (
    <div className="w-full scroll-pt-[100px]">
      <div className="flex flex-col gap-[1.25rem]">
        <h2 id="seasonal" className="text-cafe-pink snap-start">
          Beverages
        </h2>
        <div className="">
          <div className="flex justify-between w-full max-w-[400px]">
            <p>Water</p>
            <p>$1.00</p>
          </div>
          <div className="flex justify-between w-full max-w-[400px]">
            <p>Soda (Regular or Diet)</p>
            <p>$1.99</p>
          </div>
          <div className="flex justify-between w-full max-w-[400px]">
            <p>Juice Box</p>
            <p>$1.50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LightBites() {
  return (
    <div className="w-full scroll-pt-[100px]">
      <div className="flex flex-col gap-[1.25rem]">
        <h2 id="seasonal" className="text-cafe-pink snap-start">
          Light Bites
        </h2>
        <div className="">
          <div className="flex justify-between w-full max-w-[400px]">
            <p>Gold Fish</p>
            <p>$1.50</p>
          </div>
          <div className="flex justify-between w-full max-w-[400px]">
            <p>Veggie Straws</p>
            <p>$1.75</p>
          </div>
          <div className="flex justify-between w-full max-w-[400px]">
            <p>Chips</p>
            <p>$1.50</p>
          </div>
          <div className="flex justify-between w-full max-w-[400px]">
            <p>Applesauce</p>
            <p>$1.99</p>
          </div>
          <div className="flex justify-between w-full max-w-[400px]">
            <p>Yogurt Pouch</p>
            <p>$1.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
