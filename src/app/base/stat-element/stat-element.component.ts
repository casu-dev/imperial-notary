import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-stat-element',
  templateUrl: './stat-element.component.html',
  styleUrls: ['./stat-element.component.scss']
})
export class StatElementComponent {

  @Input() name: string = '';
  @Input() displayLabel: boolean = false;

  @Input() base: number = 0;
  @Input() modification: number = 0;
  @Output() baseChange = new EventEmitter<number>();
  @Output() modificationChange = new EventEmitter<number>();

  get sumString() {
    return (this.base + this.modification).toString();
  }

  onBaseValueChange(baseValue: string) {
    if (Number.isNaN(parseInt(baseValue))) {
      return;
    }
    this.base = parseInt(baseValue);
    this.baseChange.emit(this.base);
  }

  onModValueChange(modValue: string) {
    if (Number.isNaN(parseInt(modValue))) {
      return;
    }
    this.modification = parseInt(modValue);
    this.modificationChange.emit(this.modification);
  }
}
