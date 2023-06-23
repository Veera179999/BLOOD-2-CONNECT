import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fn-help',
  templateUrl: './fn-help.component.html',
  styleUrls: ['./fn-help.component.css']
})
export class FnHelpComponent {
  constructor (private ROUTES:Router){
  }
  onclick(){
    this.ROUTES.navigateByUrl("payment")
  }

}
