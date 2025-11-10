import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EduInvoice {
  anneeAcademique: string;
  etablissement: string;
  contact: string;
  telephone: string;
  anneeEtude: string;
  numeroEleve: string;
  commune: string;
  ville: string;
  numeroRecu: string;
  images: FileList | null;
  montant: number | null;
  devise: 'USD' | 'CDF';
  statut: 'à payer' | 'en attente' | 'rejeter';
  dateSoumission: Date;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  activeTab: 'factures' | 'communication' = 'factures';

  // --- Données pour la sélection Ville/Commune ---
  drcCitiesData: { [key: string]: string[] } = {
    'Kinshasa': ['Bandalungwa', 'Barumbu', 'Bumbu', 'Gombe', 'Kalamu', 'Kasa-Vubu', 'Kimbanseke', 'Kinshasa', 'Kintambo', 'Kisenso', 'Lemba', 'Limete', 'Lingwala', 'Makala', 'Maluku', 'Masina', 'Matete', 'Mont-Ngafula', 'Ndjili', 'Nsele', 'Ngaba', 'Ngaliema', 'Ngiri-Ngiri', 'Selembao'],
    'Lubumbashi': ['Annexe', 'Kamalondo', 'Kampemba', 'Katuba', 'Kenya', 'Lubumbashi', 'Ruashi'],
    'Mbuji-Mayi': ['Bipemba', 'Dibindi', 'Diulu', 'Kanshi', 'Muya'],
    'Kisangani': ['Kabondo', 'Kisangani', 'Lubunga', 'Makiso', 'Mangobo', 'Tshopo'],
    'Kananga': ['Kananga', 'Katoka', 'Lukonga', 'Ndesha', 'Nganza'],
    'Goma': ['Goma', 'Karisimbi'],
    'Bukavu': ['Bagira', 'Ibanda', 'Kadutu'],
  };
  cities: string[] = Object.keys(this.drcCitiesData);
  availableCommunes: string[] = [];


  // --- Données pour l'onglet Factures ---
  newEduInvoice: Omit<EduInvoice, 'dateSoumission'> = {
    anneeAcademique: '',
    etablissement: '',
    contact: '',
    telephone: '',
    anneeEtude: '',
    numeroEleve: '',
    commune: '',
    ville: '',
    numeroRecu: '',
    images: null,
    montant: null,
    devise: 'USD',
    statut: 'à payer',
  };
  eduInvoices: EduInvoice[] = [];

  // --- Méthodes pour l'onglet Factures ---

  onEduFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      this.newEduInvoice.images = element.files;
    }
  }

  addEduInvoice(): void {
    if (this.newEduInvoice.etablissement && this.newEduInvoice.anneeAcademique && this.newEduInvoice.numeroRecu && this.newEduInvoice.montant) {
      this.eduInvoices.unshift({ ...this.newEduInvoice, dateSoumission: new Date() });
      // Réinitialiser le formulaire
      this.newEduInvoice = {
        anneeAcademique: '', etablissement: '', anneeEtude: '', numeroEleve: '',
        commune: '', ville: '', numeroRecu: '', images: null, contact: '', telephone: '',
        montant: null, devise: 'USD', statut: 'à payer'
      };
      this.availableCommunes = [];
      const fileInput = document.getElementById('eduImages') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }

  onCityChange(): void {
    const selectedCity = this.newEduInvoice.ville;
    this.availableCommunes = this.drcCitiesData[selectedCity] || [];
    // Réinitialiser la commune à chaque changement de ville
    this.newEduInvoice.commune = '';
  }
}
