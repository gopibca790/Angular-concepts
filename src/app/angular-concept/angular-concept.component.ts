import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-concept',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-concept.component.html',
  styleUrl: './angular-concept.component.scss'
})
export class AngularConceptComponent {
  title = 'Angular-concept';
  city = 'washington dc';
  isLoggedIn = true;
  username="star";
  isEditable=true;
  favoriteFramework = '';
  // username = 'youngTech';

  showFramework() {
    alert("this is alert "+ this.favoriteFramework)

  }
  
  thamu = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
  message = '';
  message12 =''
  onMouseOver() {
    console.log('mouseover-event'+this.message+'-'+this.message12)
    this.message = 'way to go';
  }
  greet(){
    console.log('hello hi')
    this.message12 = 'hello hi'
  }
  
}
