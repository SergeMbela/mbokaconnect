import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Breakdown {
  marque: string;
  modele: string;
  anneeFabrication: number | null;
  description: string;
  dateDebutIntervention: string | null;
  datePrevueReparation: string | null;
  dateReelleReparation: string | null;
  facture: FileList | null;
  piecesChangees: string;
  photos: FileList | null;
  statutFacture: 'à payer' | 'payer' | 'contester';
}

interface AutoInvoice {
  dateFacture: string | null;
  etablissement: string;
  adresse: string;
  commune: string;
  ville: string;
  mecanicien: string;
  gsm: string;
  montant: number | null;
  devise: 'CDF' | 'USD';
  factureFile: FileList | null;
  statut: 'à payer' | 'payer' | 'contester';
}
@Component({
  selector: 'app-automobile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './automobile.component.html',
  styleUrl: './automobile.component.css'
})
export class AutomobileComponent {
  activeTab: 'pannes' | 'factures' | 'communication' = 'pannes';
  currentYear = new Date().getFullYear();

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

  // --- Données pour la sélection de véhicule ---
  carData: { [key: string]: string[] } = {
       'Toyota': ['Corolla', 'Camry', 'Yaris', 'RAV4', 'Hilux', 'Land Cruiser', 'Avensis', 'Prius', 'C-HR', 'Fortuner', 'Supra'],
    'Honda': ['Civic', 'Accord', 'CR-V', 'HR-V', 'Jazz', 'Fit', 'Pilot', 'City', 'Odyssey'],
    'Ford': ['Fiesta', 'Focus', 'Fusion', 'Mondeo', 'Mustang', 'Ranger', 'Everest', 'Explorer', 'Edge', 'Kuga', 'Escape', 'F-150'],
    'Chevrolet': ['Spark', 'Aveo', 'Cruze', 'Malibu', 'Impala', 'Camaro', 'Trax', 'Equinox', 'Tahoe', 'Suburban', 'Silverado'],
    'Mercedes-Benz': ['A-Class', 'B-Class', 'C-Class', 'E-Class', 'S-Class', 'CLA', 'GLA', 'GLC', 'GLE', 'GLS', 'G-Class', 'Maybach'],
    'BMW': ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '7 Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', 'i4', 'i8'],
    'Audi': ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'e-tron'],
    'Volkswagen': ['Up!', 'Polo', 'Golf', 'Passat', 'Arteon', 'Jetta', 'T-Roc', 'Tiguan', 'Touareg', 'ID.3', 'ID.4', 'Caddy', 'Transporter'],
    'Peugeot': ['108', '208', '308', '408', '508', '2008', '3008', '5008', 'Partner', 'Rifter'],
    'Renault': ['Twingo', 'Clio', 'Megane', 'Kadjar', 'Koleos', 'Captur', 'Scenic', 'Espace', 'Trafic', 'Master'],
    'Citroën': ['C1', 'C3', 'C4', 'C5', 'C5 Aircross', 'Berlingo', 'Jumpy'],
    'Opel': ['Karl', 'Corsa', 'Astra', 'Insignia', 'Crossland', 'Mokka', 'Grandland'],
    'Fiat': ['500', '500X', 'Panda', 'Tipo', 'Punto', 'Doblo', 'Qubo', 'Bravo'],
    'Alfa Romeo': ['Giulietta', 'Giulia', 'Stelvio', 'Tonale', '4C'],
    'Lancia': ['Ypsilon', 'Delta'],
    'Ferrari': ['Roma', 'Portofino', 'F8 Tributo', '296 GTB', 'SF90 Stradale'],
    'Lamborghini': ['Huracán', 'Aventador', 'Urus', 'Revuelto'],
    'Maserati': ['Ghibli', 'Levante', 'Quattroporte', 'GranTurismo', 'MC20'],
    'Porsche': ['911', '718 Cayman', '718 Boxster', 'Panamera', 'Macan', 'Cayenne', 'Taycan'],
    'Nissan': ['Micra', 'Almera', 'Sunny', 'Juke', 'Qashqai', 'X-Trail', 'Navara', 'Patrol', 'GT-R', 'Leaf'],
    'Mazda': ['Mazda2', 'Mazda3', 'Mazda6', 'CX-3', 'CX-30', 'CX-5', 'CX-60', 'MX-5'],
    'Hyundai': ['i10', 'i20', 'i30', 'i40', 'Elantra', 'Kona', 'Tucson', 'Santa Fe', 'Ioniq', 'Palisade'],
    'Kia': ['Picanto', 'Rio', 'Ceed', 'Cerato', 'Sportage', 'Sorento', 'Niro', 'Stonic', 'EV6', 'Seltos'],
    'Suzuki': ['Alto', 'Swift', 'Baleno', 'Ignis', 'Vitara', 'S-Cross', 'Jimny', 'Celerio'],
    'Mitsubishi': ['Space Star', 'Mirage', 'ASX', 'Outlander', 'Eclipse Cross', 'Pajero', 'L200'],
    'Dacia': ['Spring', 'Sandero', 'Logan', 'Duster', 'Jogger'],
    'Volvo': ['C40', 'S60', 'S90', 'V60', 'V90', 'XC40', 'XC60', 'XC90'],
    'Jaguar': ['XE', 'XF', 'XJ', 'F-Pace', 'E-Pace', 'I-Pace', 'F-Type'],
    'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Sport', 'Range Rover Evoque', 'Velar'],
    'Jeep': ['Renegade', 'Compass', 'Cherokee', 'Grand Cherokee', 'Wrangler', 'Gladiator'],
    'Subaru': ['Impreza', 'Legacy', 'Forester', 'Outback', 'XV', 'BRZ'],
    'Tesla': ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck'],
    'Skoda': ['Fabia', 'Scala', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Enyaq'],
    'Seat': ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco'],
    'DS Automobiles': ['DS3', 'DS4', 'DS5', 'DS7 Crossback', 'DS9'],
    'Mini': ['Mini 3 portes', 'Mini 5 portes', 'Clubman', 'Countryman', 'Convertible'],
    'Saab': ['9-3', '9-5'],
    'Chevrolet USA': ['Corvette', 'Impala', 'Malibu', 'Silverado', 'Blazer', 'Suburban'],
    'GMC': ['Terrain', 'Acadia', 'Yukon', 'Sierra', 'Canyon'],
    'Cadillac': ['CT4', 'CT5', 'XT4', 'XT5', 'XT6', 'Escalade'],
    'Infiniti': ['Q30', 'Q50', 'Q60', 'Q70', 'QX50', 'QX60', 'QX80'],
    'Lexus': ['CT', 'IS', 'ES', 'NX', 'RX', 'UX', 'GX', 'LX', 'RZ'],
    'Genesis': ['G70', 'G80', 'G90', 'GV70', 'GV80'],
    'Chrysler': ['300', 'Pacifica', 'Voyager'],
    'Dodge': ['Charger', 'Challenger', 'Durango', 'Journey', 'Ram 1500'],
    'RAM': ['1500', '2500', '3500'],
    'Buick': ['Encore', 'Enclave', 'Envision', 'LaCrosse', 'Regal'],
    'Rivian': ['R1T', 'R1S'],
    'Lucid': ['Air', 'Gravity'],
    'BYD': ['Atto 3', 'Han', 'Tang', 'Dolphin', 'Seal'],
    'Geely': ['Coolray', 'Emgrand', 'Tugella', 'Atlas'],
    'Chery': ['Tiggo 2', 'Tiggo 4', 'Tiggo 7', 'Tiggo 8', 'Arrizo 5'],
    'Great Wall': ['Haval H2', 'Haval H6', 'Poer', 'Tank 300'],
    'MG': ['MG3', 'MG5', 'MG HS', 'MG ZS', 'MG4', 'Marvel R'],
    'Tata': ['Nano', 'Tiago', 'Tigor', 'Safari', 'Harrier', 'Nexon'],
    'Mahindra': ['Bolero', 'Scorpio', 'Thar', 'XUV300', 'XUV500', 'XUV700'],
    'Proton': ['Saga', 'Persona', 'X70', 'X50'],
    'Perodua': ['Myvi', 'Axia', 'Bezza', 'Ativa']
  };
  carBrands: string[] = Object.keys(this.carData);
  filteredBrands: string[] = [];
  showBrandAutocomplete = false;
  availableModels: string[] = [];

  // --- Données pour l'onglet Pannes ---
  newBreakdown: Breakdown = {
    marque: '',
    modele: '',
    anneeFabrication: null,
    description: '',
    dateDebutIntervention: null,
    datePrevueReparation: null,
    dateReelleReparation: null,
    facture: null,
    piecesChangees: '',
    photos: null,
    statutFacture: 'à payer',
  };
  breakdowns: Breakdown[] = [];

  // --- Données pour l'onglet Factures ---
  newAutoInvoice: AutoInvoice = {
    dateFacture: null,
    etablissement: '',
    adresse: '',
    commune: '',
    ville: '',
    mecanicien: '',
    gsm: '',
    montant: null,
    devise: 'USD',
    factureFile: null,
    statut: 'à payer',
  };
  autoInvoices: AutoInvoice[] = [];

  // --- Méthodes pour l'onglet Pannes ---

  addBreakdown(): void {
    if (this.newBreakdown.marque && this.newBreakdown.modele && this.newBreakdown.description) {
      this.breakdowns.unshift({ ...this.newBreakdown }); // Ajoute au début de la liste
      // Réinitialiser le formulaire et les listes
      this.newBreakdown = { marque: '', modele: '', anneeFabrication: null, description: '', dateDebutIntervention: null, datePrevueReparation: null, dateReelleReparation: null, facture: null, piecesChangees: '', photos: null, statutFacture: 'à payer' };
      const factureInput = document.getElementById('facture') as HTMLInputElement;
      const photosInput = document.getElementById('photos') as HTMLInputElement;
      if (factureInput) factureInput.value = '';
      if (photosInput) photosInput.value = '';
    }
  }
  // --- Méthodes pour la sélection de véhicule ---


  onFileSelected(event: Event, type: 'facture' | 'photos'): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      if (type === 'facture') {
        this.newBreakdown.facture = element.files;
      } else if (type === 'photos') {
        this.newBreakdown.photos = element.files;
      }
    }
  }

  filterBrands(): void {
    if (this.newBreakdown.marque) {
      this.filteredBrands = this.carBrands.filter(brand =>
        brand.toLowerCase().includes(this.newBreakdown.marque.toLowerCase())
      );
      this.showBrandAutocomplete = this.filteredBrands.length > 0;
      this.availableModels = [];
      this.newBreakdown.modele = '';
    } else {
      this.showBrandAutocomplete = false;
      this.availableModels = [];
      this.newBreakdown.modele = '';
    }
  }

  selectBrand(brand: string): void {
    this.newBreakdown.marque = brand;
    this.availableModels = this.carData[brand] || [];
    this.newBreakdown.modele = ''; // Réinitialiser le modèle
    this.showBrandAutocomplete = false;
  }

  onBrandBlur(): void {
    // Masquer l'autocomplétion après un court délai pour permettre le clic
    setTimeout(() => this.showBrandAutocomplete = false, 200);
  }

  validateYear(): void {
    if (this.newBreakdown.anneeFabrication && this.newBreakdown.anneeFabrication > this.currentYear) {
      this.newBreakdown.anneeFabrication = this.currentYear;
    }
  }

  // --- Méthodes pour l'onglet Factures ---

  onAutoInvoiceFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      this.newAutoInvoice.factureFile = element.files;
    }
  }

  addAutoInvoice(): void {
    if (this.newAutoInvoice.etablissement && this.newAutoInvoice.montant && this.newAutoInvoice.dateFacture) {
      this.autoInvoices.unshift({ ...this.newAutoInvoice });
      // Réinitialiser le formulaire
      this.newAutoInvoice = { dateFacture: null, etablissement: '', adresse: '', commune: '', ville: '', mecanicien: '', gsm: '', montant: null, devise: 'USD', factureFile: null, statut: 'à payer' };
      this.availableCommunes = [];
      const fileInput = document.getElementById('autoFactureFile') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }

  onCityChange(): void {
    this.availableCommunes = this.drcCitiesData[this.newAutoInvoice.ville] || [];
    this.newAutoInvoice.commune = ''; // Réinitialiser la commune à chaque changement de ville
  }
}