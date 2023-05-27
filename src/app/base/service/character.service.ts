import {Injectable} from '@angular/core';
import {CharacterStats, MetaInfo, PassiveAbility, SkillStat, SkillStats, Tracker, Weapon} from "../types";

const CHAR_SAVE_KEY = 'charStats'

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  selectedChar: CharacterStats;
  debugMeta = {
    name: 'Thori Stahlfaust',
  } as MetaInfo;
  debugSkill = {
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
  } as SkillStats;

  ownsCharacter = true;

  constructor() {
    const load = this.loadCharacter();
    if (!load) {
      this.ownsCharacter = false;
      this.selectedChar = this.createCharacter(this.debugMeta, this.debugSkill);
    } else {
      this.selectedChar = load;
    }
  }

  public setName(newName: string) {
    this.selectedChar.meta.name = newName;
    this.saveCharacter();
  }

  public addTracker(name: string) {
    this.selectedChar.trackers.push({
      name,
      value: '0',
    } as Tracker);
    this.saveCharacter();
  }

  public removeTracker(target: Tracker) {
    this.selectedChar.trackers = this.selectedChar.trackers.filter(v => v !== target);
    this.saveCharacter();
  }

  public addWeapon(name: string) {
    this.selectedChar.weapons.push({
      name,
      hit: (this.selectedChar.skill.weapon + this.selectedChar.mods.weapon).toString(),
      damage: '1d10'
    } as Weapon);
    this.saveCharacter();
  }

  public removeWeapon(target: Weapon) {
    this.selectedChar.weapons = this.selectedChar.weapons.filter(v => v !== target);
    this.saveCharacter();
  }

  public addLearnedSkill(name: string) {
    this.selectedChar.learnedSkills.push({
      name,
      value: 0,
    });
    this.selectedChar.learnedSkills.sort((a, b) => a.name.localeCompare(b.name));
    this.saveCharacter();
  }

  public addPassiveAbility(passive: PassiveAbility) {
    this.selectedChar.passiveAbilities.push(passive);
    this.saveCharacter();
  }

  public removePassiveAbility(passive: PassiveAbility) {
    this.selectedChar.passiveAbilities = this.selectedChar.passiveAbilities.filter(v => v !== passive);
    this.saveCharacter();
  }

  public removeLearnedSkill(target: SkillStat) {
    this.selectedChar.learnedSkills = this.selectedChar.learnedSkills.filter(v => v !== target);
    this.saveCharacter();
  }

  public saveCharacter(): void {
    localStorage.setItem(CHAR_SAVE_KEY, JSON.stringify(this.selectedChar));
  }

  public deleteCharacter(): void {
    this.ownsCharacter = false;
    localStorage.removeItem(CHAR_SAVE_KEY);
  }

  public loadCharacter() {
    let item = localStorage.getItem(CHAR_SAVE_KEY);
    if (item) {
      return JSON.parse(item) as CharacterStats;
    }
    return null;
  }

  public createCharacter(meta: MetaInfo, stats: SkillStats): CharacterStats {
    return {
      version: 0,
      currentHealth: stats.wounds,
      meta: meta,
      skill: stats,
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
        {name: 'Movement', value: `${stats.movement} m`},
        {name: 'Charge Attack', value: `${stats.movement * 2} m`},
        {name: 'Run', value: `${stats.movement * 3} m`},
        {name: 'Fate Left', value: stats.fate.toString()},
        {name: 'Initiative ', value: '1d10 + ' + Math.floor(stats.agility / 10).toString()},
      ] as Tracker[],
      weapons: [] as Weapon[],
      baseSkills: this.generateBaseSkillList(stats),
      learnedSkills: [],
      passiveAbilities: [],
    } as CharacterStats;
  }

  public exportCharacter() {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.selectedChar)));
    element.setAttribute('download', `${this.selectedChar.meta.name.toLowerCase().trim().replaceAll(' ', '_')}-data.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    setTimeout(() => document.body.removeChild(element), 100);
  }

  public importCharacter(charFile: string) {
    const parse = JSON.parse(charFile) as CharacterStats;
    this.selectedChar = parse;
    this.saveCharacter();
  }

  public get finalWounds() {
    return this.selectedChar.skill.wounds + this.selectedChar.mods.wounds;
  }

  private generateBaseSkillList(stats: SkillStats): SkillStat[] {
    return [
      {
        name: 'Animal Handling',
        value: Math.floor(stats.intelligence * 0.5)
      },
      {
        name: 'Charm',
        value: Math.floor(stats.fellowship * 0.5)
      },
      {
        name: 'Command',
        value: Math.floor(stats.fellowship * 0.5)
      },
      {
        name: 'Concealment',
        value: Math.floor(stats.agility * 0.5)
      },
      {
        name: 'Consume Alcohol',
        value: Math.floor(stats.toughness * 0.5)
      },
      {
        name: 'Disguise',
        value: Math.floor(stats.intelligence * 0.5)
      },
      {
        name: 'Drive',
        value: Math.floor(stats.strength * 0.5)
      },
      {
        name: 'Evaluate',
        value: Math.floor(stats.intelligence * 0.5)
      },
      {
        name: 'Gamble',
        value: Math.floor(stats.intelligence * 0.5)
      },
      {
        name: 'Gossip',
        value: Math.floor(stats.fellowship * 0.5)
      },
      {
        name: 'Haggle',
        value: Math.floor(stats.fellowship * 0.5)
      },
      {
        name: 'Intimidate',
        value: Math.floor(stats.strength * 0.5)
      },
      {
        name: 'Outdoor Survival',
        value: Math.floor(stats.intelligence * 0.5)
      },
      {
        name: 'Perception',
        value: Math.floor(stats.intelligence * 0.5)
      },
      {
        name: 'Ride',
        value: Math.floor(stats.agility * 0.5)
      },
      {
        name: 'Row',
        value: Math.floor(stats.strength * 0.5)
      },
      {
        name: 'Scale Sheer Surface',
        value: Math.floor(stats.strength * 0.5)
      },
      {
        name: 'Search',
        value: Math.floor(stats.intelligence * 0.5)
      },
      {
        name: 'Silent Move',
        value: Math.floor(stats.agility * 0.5)
      },
      {
        name: 'Swim',
        value: Math.floor(stats.strength * 0.5)
      },
    ] as SkillStat[];
  }

}
