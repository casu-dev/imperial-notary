export interface HealDialogResult {
  value: string;
  heal: boolean;
}

export interface SkillStats {

  // Stats
  weapon: number;
  ballistic: number;
  strength: number;
  toughness: number;
  agility: number;
  intelligence: number;
  willpower: number;
  fellowship: number;
  attacks: number;
  wounds: number;
  movement: number;
  fate: number;
}

export interface CharacterStats {

  // Info
  name: string;
  race: string;
  age: string;
  sex: string;
  career: string;
  expUsed: number;
  expFree: number;
  currentHealth: number;
  currentFate: number;
  skill: SkillStats;
  mods: SkillStats;
  trackers: Tracker[];
  weapons: Weapon[];
}

export interface Tracker {
  name: string;
  value: string;
}

export interface Weapon {
  name: string;
  hit: string;
  damage: string;
}
