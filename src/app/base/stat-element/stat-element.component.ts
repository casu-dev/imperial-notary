import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stat-element',
  templateUrl: './stat-element.component.html',
  styleUrls: ['./stat-element.component.scss']
})
export class StatElementComponent {

  @Input() name: string = '';
  @Input() base: number = 0;
  @Input() modification: number = 0;
  @Input() displayLabel: boolean = false;

}
