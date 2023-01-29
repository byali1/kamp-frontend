import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[] = [];
  dataLoaded = false;
  
  //constructor'ın amacı componenti bellekte new'lemek
  constructor(private productService:ProductService){}

  //Component calistiginda calisan ilk method
  ngOnInit():void{
    this.getProducts();
  }

  getProducts(){
    console.log("Api request started!")
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true; //şimdi senkron
      console.log("Api request done!")
     
    })
    console.log("Method done!")
  }
}
