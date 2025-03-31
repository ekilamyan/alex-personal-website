import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services1 = [
    {
      title: 'TECHNOLOGY & IT CONSULTING',
      description: 'Networks, IT Infrastructure, Security, Cloud Services',
      imageUrl: 'https://confiolabs.com/wp-content/uploads/2024/02/1_eumNIzPYyE8X7On5iM02Hw.jpg',
      hiddenText: 'We provide expert consulting for businesses seeking to optimize their tech infrastructure.'
    },
    {
      title: 'HOME & BUSINESS AUTOMATION',
      description: 'Smart Homes, Security, AV Solutions',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDnGenvrEBHvu5E9MUY2MD-sbswkGcJQbIg&s',
      hiddenText: 'Enhance your living or working space with state-of-the-art automation systems.'
    },
    {
      title: 'AUDIO/VIDEO & CUSTOM INSTALLATIONS',
      description: 'Studios, Home Theaters, Conference Rooms',
      imageUrl: 'https://live-noco.com/wp-content/uploads/2020/11/Home-Tech-6.jpg',
      hiddenText: 'We offer premium AV solutions tailored to your needs.'
    }
  ];


  services2 = [
    {
      title: 'AUTOMOTIVE & CUSTOM BUILDS',
      description: 'Car Restoration, Modifications',
      imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
      hiddenText: 'From restoration to customization, we bring your automotive dreams to life.'
    },
    {
      title: 'ADVISORY & CONSULTING SERVICES',
      description: 'Helping you make informed decisions',
      imageUrl: 'https://peakbusinessvaluation.com/wp-content/uploads/How-To-Value-A-Consulting-Firm-scaled.jpg',
      hiddenText: 'Strategic advice to ensure your business decisions are well-informed.'
    },
    {
      title: 'MUCH, MUCH MORE...',
      description: 'Can\'t find what you\'re looking for? Contact me and we\'ll see what we can do.',
      imageUrl: 'https://discover.rbcroyalbank.com/wp-content/uploads/Brain_3_Banner-small_402x.jpg',
      hiddenText: 'Let\'s connect to explore how we can meet your unique needs.'
    }
  ];
}
