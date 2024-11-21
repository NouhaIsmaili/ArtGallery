import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from "./components/footer/footer.component";
import { NavBarUserComponent } from "./components/userTasks/nav-bar-user/nav-bar-user.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolBarComponent, HomeComponent, FooterComponent, NavBarUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetAngular';
}
