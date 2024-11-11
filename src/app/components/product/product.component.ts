import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
      tab={
        "id": "10",
        "name": "Les Deux Fridas ",
        "photo": "lesDeuxFridaidas.jpg",
        "height": 173,
        "width": 173,
        "painter": "Frida Kahlo",
        "price": 1000,
        "quantity": 1,
        "disponibility": true,
        "dateCreate": "1939-01-01T00:00:00Z",
        "comments": [],
        "category": "Surrealism",
        "description": "Les Deux Fridas is a double self-portrait that illustrates the duality of Frida Kahlo's identity, depicting her two personas: one dressed in traditional Mexican attire and the other in a European-style dress. The painting symbolizes her emotional turmoil following her divorce from Diego Rivera.",
        "discount": null,
        "nbLikes": 3000
      };

      like: boolean = false;
      onlike(){
        this.like = !this.like; 
        if(this.like){
          this.tab.nbLikes++;
        }
        else{
          this.tab.nbLikes--;

        }
        
      }
}
