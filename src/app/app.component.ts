import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialImportsModule } from '../material-imports.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialImportsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'alex-personal-website';

  isOpen = false;
  menuItems = ['ABOUT ME', 'SERVICES', 'EXPERIENCE', "LET'S TALK!"];

  constructor(@Inject(DOCUMENT) private readonly document: Document, private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    console.log("worked")
    const background = this.el.nativeElement.querySelector('.background');
    var windowSize = window.outerWidth;
    if (window.pageYOffset > 100 && windowSize > 1100) {
      this.renderer.setStyle(background, 'background-color', '#232323'); // Change to desired styles
      this.renderer.setStyle(background, 'padding-top', '0px');
      this.renderer.setStyle(background, 'box-shadow', '0px 25px 50px -38px #000000');
      this.renderer.setStyle(background, 'transition', 'background-color 0.5s ease');
      this.renderer.setStyle(background, 'transition', 'all 0.3s ease');
    }
    else {
      this.renderer.setStyle(background, 'background-color', 'transparent'); // Original styles
      this.renderer.setStyle(background, 'padding-top', '30px');
      this.renderer.setStyle(background, 'box-shadow', 'none');
    }
  }

  ngOnInit(): void {
    const background = this.el.nativeElement.querySelector('.nav-bar-container');
    var windowSize = window.outerWidth;
    if (window.pageYOffset > 100) {
      console.log("worked")
      this.renderer.setStyle(background, 'background-color', 'rgba(33, 33, 33, 0.8)'); // Change to desired styles
      this.renderer.setStyle(background, 'backdrop-filter', 'blur(15px)');
    }

    else {
      // this.renderer.setStyle(background, 'background-color', 'blue');
    }
  }
}