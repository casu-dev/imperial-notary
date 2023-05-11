import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BattleComponent} from "./tabs/battle/battle.component";
import {SkillsComponent} from "./tabs/skills/skills.component";
import {InventoryComponent} from "./tabs/inventory/inventory.component";
import {CreatorComponent} from "./creator/creator.component";
import {HomeComponent} from "./home/home.component";
import {TabsParentComponent} from "./tabs/parent/tabs-parent.component";
import {PassivesComponent} from "./tabs/passives/passives.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreatorComponent},
  {path: 'index.html', redirectTo: '/', pathMatch: "full"},
  {
    path: 'char',
    component: TabsParentComponent,
    children: [
      {path: 'battle', component: BattleComponent},
      {path: 'skill', component: SkillsComponent},
      {path: 'inventory', component: InventoryComponent},
      {path: 'passive', component: PassivesComponent},
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
