import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent {
  @Input() name: string = '';
  @Input() numeric: boolean = true;

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() readOnly: boolean = false;

  onValueChange(value: string) {
    this.value = value;
    this.valueChange.emit(value);
  }
}
