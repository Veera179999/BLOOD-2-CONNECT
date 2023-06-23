import { Component } from '@angular/core';
import { ROUTES, Router } from '@angular/router';

@Component({
  selector: 'app-dn-help',
  templateUrl: './dn-help.component.html',
  styleUrls: ['./dn-help.component.css']
})
export class DnHelpComponent {
constructor (private ROUTES:Router){
}
onclick(){
  this.ROUTES.navigateByUrl("payment2")
}
}
