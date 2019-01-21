import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'details-tab',
  templateUrl: './details-tab.component.html',
  styleUrls: ['./details-tab.component.css']
})
export class DetailsTabComponent implements OnInit {

   private myform=new  FormGroup({
     "uname": new FormControl("",[Validators.required,Validators.minLength(4)]),
     "upwd": new FormControl("",[Validators.required,Validators.minLength(2)])
   });
  constructor() { }

  display(){
    console.log(this.myform)
  }

  ngOnInit() {
    console.log(this.myform)
  }
  public submit(){
    //console.log(this.myform)
  }

}
