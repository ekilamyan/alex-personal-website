import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialImportsModule } from '../../../../material-imports.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MaterialImportsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  isOpen = false;
  menuItems = ['ABOUT ME', 'SERVICES', 'EXPERIENCE', "LET'S TALK!"];

  onHamburgerClick() {
    this.isOpen = !this.isOpen;
  }

}
