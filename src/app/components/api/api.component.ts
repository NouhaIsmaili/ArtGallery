import { JsonPipe } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  response: any;

  constructor(private http: HttpClient) {}

  searchSpotify() {
    const url =
    'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5'
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'x-rapidapi-host', // Replace with your actual key
      'x-rapidapi-host': 'spotify23.p.rapidapi.com',
    });

    this.http.get(url, { headers }).subscribe({
      next: (data) => {
        console.log('API Response:', data);
        this.response = data;
      },
      error: (err) => {
        console.error('API Error:', err);
      },
    });
  }
}
