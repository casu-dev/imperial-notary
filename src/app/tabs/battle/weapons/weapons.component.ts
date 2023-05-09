import {Component, Input} from '@angular/core';
import {CharacterStats} from "../../../base/types";

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent {

  @Input() char!: CharacterStats;

}
