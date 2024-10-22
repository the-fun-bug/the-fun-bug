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

export type Hours = {
  openPlayHours: OpenPlayHours;
  partyHours: PartyHours;
};
