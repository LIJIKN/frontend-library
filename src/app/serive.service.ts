import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriveService {

  item= {
    
    name:'',
    authorname:'',
    price:'',
    starRating:'',
    image:''}
  constructor(public http:HttpClient) {
      
  }

 onsubmit(user:any){

    return this.http.post<any>("https://libraryliji.herokuapp.com/login",user)
    }

    getbooks(){
      return  this.http.get("https://libraryliji.herokuapp.com/book");
      };

      
     loggedin(){
      return !!localStorage.getItem('token')
    }

    addbooks=(item:any)=>{
      return  this.http.post("https://libraryliji.herokuapp.com/addbook",{item})
     .subscribe((data=>{console.log(data)}));
    }
    
    getProduct(id:any){
      return this.http.get("https://libraryliji.herokuapp.com/"+id);
    }

    editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("https://libraryliji.herokuapp.com/update",product)
    .subscribe(data =>{console.log(data)})
  }

  deleteProduct(id:any)
  {

    return this.http.delete("https://libraryliji.herokuapp.com/remove/"+id)

  }
  }

  
