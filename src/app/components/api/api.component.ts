import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  response: any;
  http:HttpClient=inject(HttpClient)
  meme:any[]=[]
  
async ngOnInit() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=fernand-leger&json=2';
  this.http.get(proxyUrl + apiUrl).subscribe(
    (res: any) => {
      console.log(res);
      this.meme=res;
      console.log(this.meme.length)
  this.response=this.meme[Math.floor(Math.random() * this.meme.length)]
  console.log(this.response)
    },
  );
}
}
