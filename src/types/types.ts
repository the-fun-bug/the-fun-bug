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
