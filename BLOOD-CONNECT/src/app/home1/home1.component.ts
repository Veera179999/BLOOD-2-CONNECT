import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {
  public img='../assets/home-img.png'
constructor(private routes:Router){

}
onclick(){
  this.routes.navigateByUrl('donor')
}
onclick1(){
  this.routes.navigateByUrl('finder')
}
}
