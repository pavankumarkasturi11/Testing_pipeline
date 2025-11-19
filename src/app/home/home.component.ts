import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Hello,testing';

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  addNumbers(): void {
    this.result = this.num1 + this.num2;
  }

}
