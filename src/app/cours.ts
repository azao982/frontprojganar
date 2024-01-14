export class Cours {
    id: number;
    nomDuCours: string;
    description: string;
    coursFormatPdf: File;
    coursFormatVideo: File;
    nomProfesseur: string;
  
    constructor(id: number, nomDuCours: string, description: string, coursFormatPdf: File, coursFormatVideo: File, nomProfesseur: string) {
      this.id = id;
      this.nomDuCours = nomDuCours;
      this.description = description;
      this.coursFormatPdf = coursFormatPdf;
      this.coursFormatVideo = coursFormatVideo;
      this.nomProfesseur = nomProfesseur;
    }
  }
  
  