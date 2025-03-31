import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/input';


@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, DatePipe, ReactiveFormsModule, FormsModule, MatInputModule, MatFormField, MatSelectModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  providers: [DatePipe],
  standalone: true
})
export class ContactFormComponent {
  public contactForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private datepipe: DatePipe
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      service: [''],
      message: ['']
    });
  }


} 



  // images: string[] = [
  //   'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
  //   'https://peakbusinessvaluation.com/wp-content/uploads/How-To-Value-A-Consulting-Firm-scaled.jpg',
  //   'https://discover.rbcroyalbank.com/wp-content/uploads/Brain_3_Banner-small_402x.jpg'
  // ];
  // currentIndex = 0;
  // intervalId: any;

  // ngOnInit() {
  //   this.intervalId = setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.images.length;
  //   }, 5000); // Change every 5 seconds
  // }

  // ngOnDestroy() {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }