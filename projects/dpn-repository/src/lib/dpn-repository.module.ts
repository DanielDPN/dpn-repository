import { NgModule } from '@angular/core';
import { DpnRepositoryComponent } from './dpn-repository.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    DpnRepositoryComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    DpnRepositoryComponent,
    ButtonComponent
  ]
})
export class DpnRepositoryModule { }
