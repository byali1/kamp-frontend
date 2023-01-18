import { Component } from '@angular/core';


//data burada yönetilir

@Component({
  selector: 'app-root', //beni app-root olarak kullan
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user: string = "Ali";
  
}
