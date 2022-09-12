import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbdPopoverConfig } from './popover-config';

@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule],
  declarations: [NgbdPopoverConfig],
  exports: [NgbdPopoverConfig],
  bootstrap: [NgbdPopoverConfig],
})
export class NgbdPopoverConfigModule {}
