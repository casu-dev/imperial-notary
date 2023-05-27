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
  version: number;
  // Info
  meta: MetaInfo;
  currentHealth: number;
  skill: SkillStats;
  mods: SkillStats;
  trackers: Tracker[];
  weapons: Weapon[];
  baseSkills: SkillStat[];
  learnedSkills: SkillStat[];
  activeAbilities: Ability[];
  passiveAbilities: Ability[];

}

export interface MetaInfo {
  name: string;
  race: string;
  age: string;
  sex: string;
  career: string;
}

export interface SkillStat {
  name: string;
  value: number;
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

export interface Ability {
  name: string;
  description: string;
}
