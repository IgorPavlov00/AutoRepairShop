import { Component } from '@angular/core';
import {ScrollService} from "../scroll.service";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    lastname: ''
  };
  constructor(private scrollService: ScrollService, private http: HttpClient,private toast:ToastrService) {
  }

  scrollToServices(): void {
    this.scrollService.scrollTo('services');
  }

  scrollToHome(): void {
    this.scrollService.scrollTo('home');
  }

  scrollToAbout() {
    this.scrollService.scrollTo('feature');
  }

  scrollToLocation() {
    this.scrollService.scrollTo('location');
  }

  success(){
    this.toast.success('Email sent successfully', 'Success');
  }
  send() {
    const button = document.getElementById('submitbutton');
    if (button) {
      button.classList.add('loading'); // Add the "loading" class
      button.innerText = 'Poslato'; // Change the text
    }
  }


  submitForm() {

    if (!this.formData.name || !this.formData.lastname || !this.formData.email || !this.formData.message) {
      this.toast.error("Niste popunili sva polja","Greska!")
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.formData.email)) {
      this.toast.error("Niste uneli dobar format email adrese","Greska!")
      return;
    }
    this.http.post('http://localhost:4242/send-email', this.formData)
      .subscribe(
        (response) => {
          console.log('Email sent successfully');
          // Handle success


          this.success();

        },
        (error) => {
          console.error('Error sending email:', error);
          // Handle error
        }
      );

    this.clearForm();
  }
  clearForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
      lastname: ''
    };
}
}
