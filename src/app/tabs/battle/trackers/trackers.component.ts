import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CharacterStats, Tracker} from "../../../base/types";

@Component({
  selector: 'app-trackers',
  templateUrl: './trackers.component.html',
  styleUrls: ['./trackers.component.scss']
})
export class TrackersComponent {

  @Input() char!: CharacterStats;

  @Output() remove = new EventEmitter<Tracker>();

  editMode = false;

  onTrackerRemoveClick(tracker: Tracker) {
    this.remove.emit(tracker);
    this.editMode = false;
  }

}
