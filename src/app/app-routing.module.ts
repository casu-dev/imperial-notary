import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BattleComponent} from "./tabs/battle/battle.component";
import {SkillsComponent} from "./tabs/skills/skills.component";
import {InventoryComponent} from "./tabs/inventory/inventory.component";

const routes: Routes = [
  {path: '', redirectTo: 'battle', pathMatch: "full"},
  {path: 'battle', component: BattleComponent},
  {path: 'skill', component: SkillsComponent},
  {path: 'inv', component: InventoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
