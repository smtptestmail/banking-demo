import { Component ,ElementRef} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  $:any;
  title = 'banking-project';
  constructor(public el:ElementRef){
    
  }
  ngOnInit(){
    
  }
}
