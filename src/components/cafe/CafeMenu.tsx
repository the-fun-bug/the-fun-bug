import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MenuType,
  DrinkType,
  SpecialtiesPrice,
  Milk,
  Item,
  Pricing,
  Flavor,
} from '@/types/types';
import iceCubeImg from './img/ice-cube.png';
import buildYourOwnImg from './img/build-your-own.png';
import lotusLogo from './img/lotus-logo.png';

export default function CafeMenu({ menuData }: { menuData: MenuType }) {
  return (
    <section
      id="menu"
      className="flex justify-center items-center py-[3rem] px-[1rem]"
    >
      <div className="flex flex-col gap-[1rem] w-full max-w-[1200px] mb-[1rem]">
        <h2 className="font-nickainley">Menu</h2>
        <Specialties
          specialtiesPricing={menuData.specialtiesPricing}
          coffeeDrinks={menuData.coffeeDrinks}
          teaDrinks={menuData.teaDrinks}
          refreshers={menuData.refreshers}
          milks={menuData.milks}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.25rem] justify-between py-[2rem]">
          <BuildYourOwn
            pricing={menuData.buildYourOwnPricing}
            flavors={menuData.flavors}
            milk={menuData.milks}
          />
          <div className="flex flex-col gap-[3rem]">
            <SeasonalSpecialties
              pricing={menuData.seasonalPricing}
              drinks={menuData.seasonalDrinks}
            />
            <Beverages beverages={menuData.beverages} />
            <LightBites bites={menuData.bites} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Specialties({
  specialtiesPricing,
  coffeeDrinks,
  teaDrinks,
  refreshers,
  milks,
}: {
  specialtiesPricing: SpecialtiesPrice;
  coffeeDrinks: DrinkType[];
  teaDrinks: DrinkType[];
  refreshers: DrinkType[];
  milks: Milk[];
}) {
  const houseSpecialties = [
    {
      type: 'coffee',
      drinks: coffeeDrinks,
    },
    {
      type: 'tea',
      drinks: teaDrinks,
    },
    {
      type: 'refreshers',
      drinks: refreshers,
    },
  ];

  const displayMilks = milks.map((m) => m.milk);
  const formattedMilks =
    displayMilks.length > 1
      ? displayMilks.slice(0, -1).join(', ') +
        ' and ' +
        displayMilks[displayMilks.length - 1]
      : displayMilks[0] || '';

  const colOne = houseSpecialties.filter((s) => s.type === 'coffee');
  const colTwo = houseSpecialties.filter(
    (s) => s.type === 'tea' || s.type === 'refreshers'
  );

  return (
    <div className="w-full">
      <div className="flex flex-col gap-[1.25rem]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="text-cafe-pink">House Specialties</h3>
            <div className="flex flex-row flex-wrap md:justify-between gap-[2rem] md:max-w-[85%] my-[1.5rem]">
              <div>
                <div className="flex justify-between w-[205px]">
                  <p>Hot drinks (16oz)</p>
                  <p>{specialtiesPricing.hot}</p>
                </div>
                <div className="flex justify-between w-[205px]">
                  <p>Iced drinks (20oz)</p>
                  <p>{specialtiesPricing.iced}</p>
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
                />
                <p>this drink only comes iced</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-cafe-pink mt-[1.5rem] mb-[1rem]">Extras</h4>
            <div className="flex flex-row flex-wrap justify-between md:max-w-[85%] mt-[1rem] mb-[1.5rem]">
              <div className="mr-[1rem]">
                <div className="flex justify-between w-[205px]">
                  <p>Cold Foam</p>
                  <p>+ {specialtiesPricing.coldFoam}</p>
                </div>
                <div className="flex justify-between w-[205px]">
                  <p>Plant-based Milk</p>
                  <p>+ {specialtiesPricing.plantMilk}</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between w-[205px]">
                  <p>Espresso Shot</p>
                  <p>+ $0.75</p>
                </div>
                <div className="flex justify-between w-[205px]">
                  <p>Extra Flavor Add-in</p>
                  <p>+ $0.25</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[1rem] md:max-w-[85%]">
              <p className="max-w-[450px]">
                * {formattedMilks} are available upon request
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {/* First Column */}
          <div className="md:max-w-[85%] sm:max-w-[80%]">
            {colOne.map((s) => (
              <div key={s.type}>
                <h4 className="uppercase text-cafe-pink mt-[1rem] mb-[1rem]">
                  {s.type}
                </h4>
                {s.drinks.map((d) => (
                  <div
                    key={d.drinkName}
                    className="flex justify-between items-center gap-[1.25rem] mb-[2.5rem]"
                  >
                    <div>
                      <div className="flex gap-[0.75rem]">
                        <h3>{d.drinkName}</h3>
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
                      <p>{d.drinkIngredients}</p>
                    </div>
                    <Image
                      src={d.drinkImage}
                      alt={d.drinkImageAlt}
                      className="max-w-[96px]"
                      {...(d.drinkImageType === 'short'
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
                <h4
                  className={`uppercase text-cafe-pink mb-[1rem] ${s.type === 'refreshers' ? 'mt-[2rem]' : 'mt-[1rem]'}`}
                >
                  {s.type}
                </h4>
                {s.type === 'refreshers' && (
                  <div className="flex items-center gap-[1rem] mb-[1rem]">
                    <Image
                      src={lotusLogo}
                      width={100}
                      height={105}
                      className="max-w-[75px]"
                      alt="Lotus energy drinks logo"
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
                        <h3>{d.drinkName}</h3>
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
                      <p>{d.drinkIngredients}</p>
                    </div>
                    <Image
                      src={d.drinkImage}
                      alt={d.drinkImageAlt}
                      className="max-w-[96px]"
                      {...(d.drinkImageType === 'short'
                        ? { height: 156, width: 190 }
                        : { height: 200, width: 178 })}
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

function BuildYourOwn({
  pricing,
  flavors,
  milk,
}: {
  pricing: Pricing;
  flavors: Flavor[];
  milk: Milk[];
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-[1.25rem]">
        <h3 className="text-cafe-pink">Build Your Own Latte</h3>
        <div className="flex justify-between w-[205px]">
          <div>
            <div className="flex justify-between w-[205px]">
              <p>Hot (16oz)</p>
              <p>{pricing.hot}</p>
            </div>
            <div className="flex justify-between w-[205px]">
              <p>Iced (20oz)</p>
              <p>{pricing.iced}</p>
            </div>
          </div>{' '}
        </div>
        <div>
          <h4>Step 1 - Select your flavor(s)</h4>
          <p>*Sugar free available</p>
        </div>
        <div className="grid grid-cols-2">
          {flavors.map((f) => (
            <p key={f.flavor}>{`${f.flavor}${f.sugarFree ? '*' : ''}`}</p>
          ))}
        </div>
        <h4>Step 2 - Select your milk</h4>
        <div>
          {milk.map((f) => (
            <p key={f.milk}>{f.milk}</p>
          ))}
        </div>
      </div>
      <div className="flex gap-[2rem] items-center">
        <h4>Step 3 - Enjoy!</h4>
        <Image
          src={buildYourOwnImg}
          alt="Fun Bug worm behind iced drink"
          className="max-w-[96px]"
          width={178}
          height={200}
        />
      </div>
    </div>
  );
}

function SeasonalSpecialties({
  pricing,
  drinks,
}: {
  pricing: Pricing;
  drinks: DrinkType[] | null;
}) {
  return (
    <div className="w-full scroll-pt-[100px]">
      <div className="flex flex-col gap-[1.25rem]">
        <h3 id="seasonal" className="text-cafe-pink snap-start">
          Seasonal Specialties
        </h3>
        <div>
          <div className="flex justify-between w-[205px]">
            <p>Hot drinks (12oz)</p>
            <p>{pricing.hot}</p>
          </div>
          <div className="flex justify-between w-[205px]">
            <p>Iced drinks (20oz)</p>
            <p>{pricing.iced}</p>
          </div>
        </div>
        {drinks && drinks.length ? (
          drinks.map((d) => (
            <div
              key={d.drinkName}
              className="flex justify-between items-center gap-[1.25rem] mb-[2.5rem]"
            >
              <div>
                <div className="flex gap-[0.75rem]">
                  <h3>{d.drinkName}</h3>
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
                <p>{d.drinkIngredients}</p>
              </div>
              <Image
                src={d.drinkImage}
                alt={d.drinkImageAlt}
                className="max-w-[96px]"
                {...(d.drinkImageType === 'short'
                  ? { height: 156, width: 190 }
                  : { height: 200, width: 178 })}
              />
            </div>
          ))
        ) : (
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

function Beverages({ beverages }: { beverages: Item[] }) {
  return (
    <div className="w-full scroll-pt-[100px]">
      <div className="flex flex-col gap-[1.25rem]">
        <h3 id="seasonal" className="text-cafe-pink snap-start">
          Beverages
        </h3>
        <div>
          {beverages.map((b) => (
            <div
              key={b.name}
              className="flex justify-between w-full max-w-[400px]"
            >
              <p>{b.name}</p>
              <p>{b.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LightBites({ bites }: { bites: Item[] }) {
  return (
    <div className="w-full scroll-pt-[100px]">
      <div className="flex flex-col gap-[1.25rem]">
        <h3 id="seasonal" className="text-cafe-pink snap-start">
          Light Bites
        </h3>
        <div>
          {bites.map((b) => (
            <div
              key={b.name}
              className="flex justify-between w-full max-w-[400px]"
            >
              <p>{b.name}</p>
              <p>{b.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
