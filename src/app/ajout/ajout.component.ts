import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  isButtonDisabled = true;
  coursForm:FormGroup;
  constructor(private coursService:CoursService, private formBuilder:FormBuilder, private router:Router) { }
  onAjouter(){
    this.coursService.addCours(this.coursForm.value).subscribe(data => console.log(data));
    // pour initialiser le formulaire de zero 
    
    this.coursForm.reset();
    // pour actualiser la page 
   // window.location.reload();
   this.router.navigate(['/List']);


    }
   
  ngOnInit(): void {
    this.coursForm = this.formBuilder.group({
      nomDuCours: '',
      description: '',
      coursFormatPdf: null,
      coursFormatVideo: null,
      nomProfesseur: ''
    });
    this.coursForm.valueChanges.subscribe(() => {
      // Mettez à jour l'état du bouton en fonction de la validité du formulaire
      this.isButtonDisabled = this.coursForm.invalid;
    });
  }
  retour(){
    this.router.navigate(['/List'])
  }
  }