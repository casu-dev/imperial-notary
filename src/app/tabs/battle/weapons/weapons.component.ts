import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CharacterStats, Weapon} from "../../../base/types";

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent {

  @Input() char!: CharacterStats;

  @Output() remove = new EventEmitter<Weapon>();

  editMode = false;

  onWeaponRemoveClick(weapon: Weapon) {
    this.remove.emit(weapon);
    this.editMode = false;
  }

}
