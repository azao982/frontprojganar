import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){
  }
  onSelectChange(event: any) {
const selectedValue = event.target.value;
    if (selectedValue === 'consulter') {
this.router.navigate(['/List']);
} else if (selectedValue === 'ajouter') {
this.router.navigate(['/ajout']);
} else if (selectedValue === 'supprimer') {
this.router.navigate(['/supp']);
} else if (selectedValue === 'modifier') {
this.router.navigate(['/mod']);
}
}
}