import { Component } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-popover-config',
  templateUrl: './popover-config.html',
  providers: [NgbPopoverConfig], // add NgbPopoverConfig to the component providers
})
export class NgbdPopoverConfig {
  popoverBackup;
  constructor(config: NgbPopoverConfig) {
    config.placement = 'end';
  }
  time = { hour: 13, minute: 30 };
  mouseLeaveClose() {
    this.popoverBackup?.close();
  }
  openProfileInfo(pop) {
    if (pop.isOpen) {
      pop.open();
      this.popoverBackup = pop;
    }
  }
}
