import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-findthedonor',
  templateUrl: './findthedonor.component.html',
  styleUrls: ['./findthedonor.component.css']
})
export class FindthedonorComponent {
constructor(private route:Router){
}
ngOnInit():void{
}
onclick(){
  this.route.navigateByUrl('spot');
}
}