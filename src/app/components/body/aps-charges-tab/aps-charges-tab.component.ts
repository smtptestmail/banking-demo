import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../../../services/countries.service'
import {TreeviewItem,TreeviewConfig} from 'ngx-treeview'
import {RegionService} from '../../../services/region.service'
@Component({
  selector: 'aps-charges-tab',
  templateUrl: './aps-charges-tab.component.html',
  styleUrls: ['./aps-charges-tab.component.css']
})
export class ApsChargesTabComponent implements OnInit {

  public result:any;
  public countriesSubscribe:any;
  public selected1:boolean = false;
  public selected2:boolean = false;

  dropdownEnabled = true;
  items: TreeviewItem[];
  values: any[];
  config = TreeviewConfig.create({
      hasAllCheckBox: true,
      hasFilter: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
      maxHeight: 400
        });



  buttonClasses = [
      'btn-outline-primary',
      'btn-outline-secondary',
      'btn-outline-success',
      'btn-outline-danger',
      'btn-outline-warning',
      'btn-outline-info',
      'btn-outline-light',
      'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  constructor(
      private service: CountriesService,private reg:RegionService
  ) { }

  ngOnInit() {
      
    this.countriesSubscribe = this.service.getService().subscribe(data=>{
      this.result = data;
    })
      this.items = this.reg.getData();
  }

  onFilterChange(value: string) {
      console.log('filter:', value);
  }
  public getSelectedValues(value){
    this.values = value;
  }
}


