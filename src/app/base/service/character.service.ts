import {Injectable} from '@angular/core';
import {CharacterStats, SkillStats} from "../types";

const CHAR_SAVE_KEY = 'charStats'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  selectedChar: CharacterStats = {
    name: 'Thori Stahlfaust',
    age: '52',
    career: 'Clan Warrior',
    race: 'Dwarve',
    sex: 'm',
    currentHealth: 13,
    expFree: 350,
    expUsed: 1500,
    skill: {
      weapon: 47,
      ballistic: 30,
      strength: 43,
      toughness: 52,
      agility: 20,
      intelligence: 34,
      willpower: 32,
      fellowship: 21,
      attacks: 1,
      wounds: 15,
      movement: 3,
      fate: 2,
    } as SkillStats,
  } as CharacterStats;

  public saveCharacter(): void {
    localStorage.setItem(CHAR_SAVE_KEY, JSON.stringify(this.selectedChar));
  }

  public loadCharacter(charName: string): void {
    let item = localStorage.getItem(charName);
    if (item) {
      this.selectedChar = JSON.parse(item);
    }

    let asdf: any;
  }

}

export class Character {

  constructor(private stats: CharacterStats) {
  }

}
