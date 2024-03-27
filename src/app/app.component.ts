import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NproProjectManagementUI';
  showAside:boolean=true;


  arrowClick(){
    alert('this click');

  }
}
