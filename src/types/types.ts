type OpenPlayHours = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
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
  coldFoam: string;
  plantMilk: string;
};

export type Flavor = {
  flavor: string;
  sugarFree: boolean;
};

export type DrinkType = {
  drinkName: string;
  secondaryName: string;
  drinkIngredients: string;
  icedOnly: boolean;
  drinkImageType: 'tall' | 'short';
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

export interface PartyPricing {
  partyPricing: string;
}

export type Hours = {
  openPlayHours: OpenPlayHours;
  partyHours: PartyHours;
};

export type Photos = {
  aboutPhoto: string;
  homepagePhotos: HomePagePhoto[];
};

export type BannerType = {
  websiteBanner: string;
};

export type MenuType = {
  specialtiesPricing: SpecialtiesPrice;
  coffeeDrinks: DrinkType[];
  teaDrinks: DrinkType[];
  refreshers: DrinkType[];
  specialtyDrinks: DrinkType[] | null;
  seasonalPricing: Pricing;
  seasonalDrinks: DrinkType[] | null;
  buildYourOwnPricing: Pricing;
  flavors: Flavor[];
  milks: Milk[];
  beverages: Item[];
  bites: Item[];
};
