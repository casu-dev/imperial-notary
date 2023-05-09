import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CharacterStats, SkillStat, Weapon} from "../../../base/types";

@Component({
  selector: 'app-learned-skills',
  templateUrl: './learned-skills.component.html',
  styleUrls: ['./learned-skills.component.scss']
})
export class LearnedSkillsComponent {

  @Input() char!: CharacterStats;

  @Output() remove = new EventEmitter<SkillStat>();

  editMode = false;

  onSkillRemoveClick(skill: SkillStat) {
    this.remove.emit(skill);
    this.editMode = false;
  }

}
