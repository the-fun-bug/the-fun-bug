type OpenPlayHours = {
  mtt: string;
  wf: string;
  saturday: string;
  sunday: string;
};

type PartyHours = {
  sunday: string;
  saturday: string;
  friday: string;
};

export type SpecialtiesPrice = {
  hot: string;
  iced: string;
  shot: string;
  flavor: string;
};

export type Flavor = {
  flavor: string;
  sugarFree: boolean;
};

export type DrinkType = {
  drinkName: string;
  secondaryName: string;
  drinkIngredients: string;
  drinkImageType: 'tall' | 'short';
  drinkImageAlt: string;
  drinkImage: string;
};

export type DirtySodaDrinkType = {
  drinkName: string;
  description: string;
  drinkImageAlt: string;
  drinkImage: string;
};

export type Item = {
  name: string;
  price: string;
};

export type Pricing = {
  hot: string;
  iced: string;
};

export type Milk = {
  milk: string;
};

export type HomePagePhoto = {
  image: string;
  alt: string;
};

export type Bullet = {
  bullet: string;
};

export interface PartyPageData {
  partyPricing: string;
  tax: string;
  partyBullets: Bullet[];
}

export type Hours = {
  openPlayHours: OpenPlayHours;
  partyHours: PartyHours;
};

export type Photos = {
  aboutPhoto: string;
  homepagePhotos: HomePagePhoto[];
};

export type MenuType = {
  specialtiesPricing: SpecialtiesPrice;
  coffeeDrinks: DrinkType[];
  teaDrinks: DrinkType[];
  refreshers: DrinkType[];
  specialtyDrinks: DrinkType[] | null;
  dirtySodasPricing: Pricing;
  dirtySodas: DirtySodaDrinkType[] | null;
  buildYourOwnPricing: Pricing;
  flavors: Flavor[];
  milks: Milk[];
  beverages: Item[];
  bites: Item[];
  kids: Item[];
};
