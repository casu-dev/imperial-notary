import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-attack-element',
  templateUrl: './attack-element.component.html',
  styleUrls: ['./attack-element.component.scss']
})
export class AttackElementComponent {

  @Input() name: string = '';
  @Input() displayLabel: boolean = false;

  @Input() hit: string = '';
  @Input() damage: string = '';
  @Output() hitChange = new EventEmitter<string>();
  @Output() damageChange = new EventEmitter<string>();

  onHitChange(newValue: string) {
    this.hit = newValue;
    this.hitChange.emit(this.hit);
  }

  onDamageChange(newValue: string) {
    this.damage = newValue;
    this.damageChange.emit(this.damage);
  }
}
