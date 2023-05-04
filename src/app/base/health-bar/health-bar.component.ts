import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss']
})
export class HealthBarComponent {

  @Input() maxHealth: number = 10;
  @Input() currentHealth: number = 3;

  get healthPercent(): string {
    let fill = this.currentHealth * 100 / this.maxHealth
    if(fill > 100) fill = 100;
    if(fill < 0) fill = 0;
    return `${fill}%`;
  }
}
