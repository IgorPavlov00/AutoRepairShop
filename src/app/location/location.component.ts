import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Status = 'idle' | 'sending' | 'success' | 'error';

const emptyForm = () => ({ name: '', lastname: '', email: '', message: '', website: '' });

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  formData = emptyForm();
  errors: Record<string, string> = {};
  status: Status = 'idle';

  constructor(private http: HttpClient) {}

  submitForm(): void {
    if (this.status === 'sending' || !this.validate()) return;

    this.status = 'sending';
    this.http.post('send-email', this.formData).subscribe({
      next: () => {
        this.status = 'success';
        this.formData = emptyForm();
      },
      // The visitor's text is kept so they can retry without retyping it.
      error: () => (this.status = 'error'),
    });
  }

  private validate(): boolean {
    const { name, lastname, email, message } = this.formData;
    this.errors = {};
    this.status = 'idle';

    if (!name.trim()) this.errors['name'] = 'Unesite ime.';
    if (!lastname.trim()) this.errors['lastname'] = 'Unesite prezime.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) this.errors['email'] = 'Unesite ispravnu email adresu.';
    if (!message.trim()) this.errors['message'] = 'Napišite šta treba da se popravi.';

    return Object.keys(this.errors).length === 0;
  }
}
