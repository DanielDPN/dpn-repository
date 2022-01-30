import { NgModule } from '@angular/core';
import { DpnRepositoryComponent } from '../components/dpn-repository.component';
import { HeaderMenuComponent } from '../components/header-menu/header-menu.component';



@NgModule({
  declarations: [
    DpnRepositoryComponent,
    HeaderMenuComponent
  ],
  imports: [
  ],
  exports: [
    DpnRepositoryComponent,
    HeaderMenuComponent
  ]
})
export class DpnRepositoryModule { }
