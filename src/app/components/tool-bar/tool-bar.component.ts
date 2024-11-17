import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProdListComponent } from '../prod-list/prod-list.component';
@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [MatToolbarModule, HomeComponent,ProdListComponent,MatButtonModule,RouterLink, MatIconModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {


}
