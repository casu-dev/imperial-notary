import {Injectable} from '@angular/core';
import {CharacterStats, SkillStats, Tracker, Weapon} from "../types";

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
    mods: {
      weapon: 0,
      ballistic: 0,
      strength: 0,
      toughness: 0,
      agility: 0,
      intelligence: 0,
      willpower: 0,
      fellowship: 0,
      attacks: 0,
      wounds: 0,
      movement: 0,
      fate: 0,
    } as SkillStats,
    trackers: [
      {name: 'Movement', value: '3 m'},
      {name: 'Charge Attack', value: '6 m'},
      {name: 'Dash', value: '9 m'},
    ] as Tracker[],
    weapons: [
      {name: '1H Hammer', hit: '47', damage: '1d10 + 5'},
      {name: 'Shield', hit: '47', damage: '-'}
    ] as Weapon[]
  } as CharacterStats;

  public saveCharacter(): void {
    localStorage.setItem(CHAR_SAVE_KEY, JSON.stringify(this.selectedChar));
  }

  public loadCharacter(charName: string): void {
    let item = localStorage.getItem(charName);
    if (item) {
      this.selectedChar = JSON.parse(item);
    }
  }

  public get finalWounds() {
    return this.selectedChar.skill.wounds + this.selectedChar.mods.wounds;
  }

}
