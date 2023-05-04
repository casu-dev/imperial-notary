import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-label-card',
  templateUrl: './label-card.component.html',
  styleUrls: ['./label-card.component.scss']
})
export class LabelCardComponent {
  @Input() name: string = '';
}
