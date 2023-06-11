import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRouting } from './core.routing';
import { CoreShell } from './core.shell';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CoreShell],
  imports: [
    BrowserModule,
    CoreRouting,
    NoopAnimationsModule,
  ],
  bootstrap: [CoreShell],
})
export class CoreModule {
}
