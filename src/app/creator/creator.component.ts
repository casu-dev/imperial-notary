import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CharacterService} from "../base/service/character.service";
import {MetaInfo, SkillStats} from "../base/types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {

  constructor(private charService: CharacterService, private router: Router) {
  }

  nameControl = new FormControl('', Validators.required);
  characterForm = new FormGroup({
    weapon: new FormControl<string>('', Validators.required),
    ballistic: new FormControl<string>('', Validators.required),
    strength: new FormControl<string>('', Validators.required),
    toughness: new FormControl<string>('', Validators.required),
    agility: new FormControl<string>('', Validators.required),
    intelligence: new FormControl<string>('', Validators.required),
    willpower: new FormControl<string>('', Validators.required),
    fellowship: new FormControl<string>('', Validators.required),
    attacks: new FormControl<string>('', Validators.required),
    wounds: new FormControl<string>('', Validators.required),
    movement: new FormControl<string>('', Validators.required),
    fate: new FormControl<string>('', Validators.required),
  });

  handleSubmit() {
    const formInts = this.convertIntObj(this.characterForm.value);
    this.charService.selectedChar = this.charService
      .createCharacter({name: this.nameControl.value} as MetaInfo, formInts as SkillStats);
    this.charService.saveCharacter();
    this.router.navigate(['char', 'battle']).then();
  }

  convertIntObj(obj: any) {
    const res: any = {};
    for (const key in obj) {
      res[key] = parseInt(obj[key]);
    }
    return res;
  }

}
