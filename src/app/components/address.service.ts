import Dexie from 'dexie'
import {Injectable} from '@angular/core'
import {Address} from '../model'


@Injectable()
export class AddressService{
    db:Dexie;

    constructor(){
        this.db=new Dexie('friends');
        this.db.version(1).stores({
            addresses: 'email,name,phone'
        })
    }

    saveAddress(address :Address):Promise<any>{
        return(this.db['addresses'].put(address)
        .then(()=>{
            return ({
                status: true,
                msg: "saved"
            })
        })
        .catch((err)=>{
            return ({
                status:false,
                msg:"error"
            })
        })
    );
    }

    loadAddresses():Promise<Address[]>{
        return(
            this.db['addresses'].orderBy('name').toArray()
        );
    }
}