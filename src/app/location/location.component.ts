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
  submitForm() {
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
