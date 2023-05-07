import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CharacterService} from "../../base/service/character.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor(private dialog: MatDialog, public charService: CharacterService) {
  }

}
