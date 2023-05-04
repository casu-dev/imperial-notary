import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-attack-element',
  templateUrl: './attack-element.component.html',
  styleUrls: ['./attack-element.component.scss']
})
export class AttackElementComponent {

  @Input() name: string = '';
  @Input() hit: string = '';
  @Input() damage: string = '';
  @Input() displayLabel: boolean = false;
}
