import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-skill-element',
  templateUrl: './skill-element.component.html',
  styleUrls: ['./skill-element.component.scss']
})
export class SkillElementComponent {

  @Input() name: string = '';
  @Input() score: number = 0;
  @Output() scoreChange = new EventEmitter<number>();
  @Input() displayLabel: boolean = false;

  onScoreChange(newValue: string) {
    if(Number.isNaN(parseInt(newValue))) {
      return;
    }
    this.score = parseInt(newValue);
    this.scoreChange.emit(this.score);
  }

}
