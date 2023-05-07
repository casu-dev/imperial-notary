import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill-element',
  templateUrl: './skill-element.component.html',
  styleUrls: ['./skill-element.component.scss']
})
export class SkillElementComponent {

  @Input() name: string = '';
  @Input() score: string = '';
  @Input() displayLabel: boolean = false;

}
