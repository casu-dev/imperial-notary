import {Component, Input} from '@angular/core';
import {CharacterStats} from "../../../base/types";

@Component({
  selector: 'app-trackers',
  templateUrl: './trackers.component.html',
  styleUrls: ['./trackers.component.scss']
})
export class TrackersComponent {

  @Input() char!: CharacterStats;

}
