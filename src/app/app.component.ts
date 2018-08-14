import { Component, OnInit, OnDestroy } from '@angular/core';
import {Address} from '../app/model'
import {AddressService} from '../app/components/address.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'addressBook';

  constructor(private addressSvc:AddressService){}

  addresses: Address[]=[];

  ngOnInit(){
    this.addressSvc.loadAddresses()
    .then((addresses:Address[])=>{
      console.info('Add from db :',addresses)
      this.addresses= addresses;
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  ngOnDestroy(){}

  processAddress($event:Address){
    this.addressSvc.saveAddress($event)
    .then(()=>{
      console.log('Saved!')
      this.addresses.push($event);
    })
    .catch((err)=>{
      console.error("Error",err)
    })
    console.log($event);
  }

  delete($event:string){
    console.log($event);
  }
}
