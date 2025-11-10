import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ConstructionStage {
  name: string;
  completed: boolean;
  completionDate: Date | null;
}

interface Invoice {
  denomination: string;
  montant: number | null;
  quantite: number | null;
  marque: string;
  devise: 'CDF' | 'USD';
  numeroFacture: string;
  statut: 'à payer' | 'payer' | 'contester';
  dateValidation: string | null;
  fichiers: FileList | null;
}

interface CommunicationPost {
  comments: string;
  mediaDate: string | null;
  files: FileList | null;
  postDate: Date;
}

@Component({
  selector: 'app-building',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './building.component.html',
  styleUrl: './building.component.css'
})
export class BuildingComponent {
  activeTab: 'suivi' | 'factures' | 'communication' = 'suivi';

  // --- Données pour l'onglet Factures ---
  newInvoice: Invoice = {
    denomination: '',
    montant: null,
    quantite: null,
    marque: '',
    devise: 'USD',
    numeroFacture: '',
    statut: 'à payer',
    dateValidation: null,
    fichiers: null
  };

  // --- Données pour l'onglet Communication ---
  newPost: Omit<CommunicationPost, 'postDate'> = {
    comments: '',
    mediaDate: null,
    files: null,
  };
  posts: CommunicationPost[] = [];



  invoices: Invoice[] = [];
  materialsList: string[] = [    // Matériaux de construction
    'Ciment', 'Sable', 'Gravier', 'Béton prêt à l’emploi', 'Briques', 'Parpaings', 'Blocs béton cellulaire',
    'Bois de charpente', 'Poutres', 'Planches', 'Lambris', 'Tuiles', 'Ardoises', 'Zinc', 'Bac acier',
    'Membranes d’étanchéité', 'Isolation thermique', 'Isolation acoustique', 'Laine de verre', 'Polystyrène',
    // Menuiserie et fermetures
    'Fenêtres', 'Portes d’intérieur', 'Portes d’extérieur', 'Portails', 'Volets', 'Charnières', 'Poignées',
    'Serrures', 'Garde-corps', 'Rambardes', 'Verre trempé', 'Verre feuilleté', 'Vitrages isolants',
    // Plomberie et sanitaires
    'Tuyaux PVC', 'Cuivre', 'Raccords', 'Robinets', 'Lavabos', 'WC', 'Douches', 'Baignoires', 'Bidets',
    'Chauffe-eau', 'Ballons thermodynamiques',
    // Électricité et domotique
    'Câbles électriques', 'Interrupteurs', 'Prises', 'Tableau électrique', 'Disjoncteurs', 'Fusibles',
    'Lampes', 'Spots', 'Plafonniers', 'Lampadaires', 'Thermostats', 'Détecteurs de mouvement', 'Caméras', 'Alarmes',
    // Chauffage, climatisation et ventilation
    'Radiateurs', 'Chauffage central', 'Plancher chauffant', 'Climatiseurs', 'Ventilateurs', 'VMC simple flux',
    'VMC double flux', 'Conduits de ventilation',
    // Revêtements et finitions
    'Peinture', 'Enduits', 'Placoplâtre', 'Carrelage', 'Parquets', 'Sols stratifiés', 'Moquettes', 'Vinyles',
    'Panneaux décoratifs', 'Papier peint', 'Stickers muraux',
    // Équipements et outillage
    'Visserie', 'Boulonnerie', 'Marteaux', 'Perceuses', 'Scies', 'Niveaux', 'Équipements de sécurité',
    'Extincteurs', 'Détecteurs de fumée', 'Gants', 'Casques',
    // Aménagement extérieur
    'Clôtures métalliques', 'Grilles', 'Portails coulissants', 'Pavés', 'Dalles', 'Bois composite', 'Pierre naturelle',
    'Pergolas', 'Fontaines', 'Abri de jardin', 'Éclairage extérieur',
    // Transport
    'Véhicules de chantier', 'Camions', 'Tracteurs', 'Engins lourds', 'Location de matériaux', 'Transport de matériaux',
    'Camions-bennes', 'Camions-citernes', 'Livraison de matériaux', 'Organisation des trajets', 'Gestion des itinéraires',
    // Surveillance et sécurité
    'Gardiennage', 'Rondes de sécurité', 'Caméras de surveillance', 'Systèmes de contrôle d’accès', 'CCTV',
    'Badge et lecteur d’accès'
  ];
  filteredMaterials: string[] = [];
  showAutocomplete = false;


  // --- Données pour l'onglet Suivi chantier ---

  stages: ConstructionStage[] = [
    { name: 'Préparation du terrain et fondations', completed: false, completionDate: null },
    { name: 'Élévation des murs porteurs', completed: false, completionDate: null },
    { name: 'Installation de la charpente et de la toiture', completed: false, completionDate: null },
    { name: 'Pose des menuiseries extérieures (portes et fenêtres)', completed: false, completionDate: null },
    { name: 'Plomberie, électricité et CVC (Chauffage, Ventilation, Climatisation)', completed: false, completionDate: null },
    { name: 'Isolation et cloisons intérieures', completed: false, completionDate: null },
    { name: 'Finitions intérieures (peinture, sols)', completed: false, completionDate: null },
    { name: 'Aménagements extérieurs et façade', completed: false, completionDate: null },
  ];

  updateCompletion(stage: ConstructionStage): void {
    if (stage.completed) {
      stage.completionDate = new Date();
    } else {
      stage.completionDate = null;
    }
  }

  get progressPercentage(): number {
    const completedStages = this.stages.filter(s => s.completed).length;
    return (completedStages / this.stages.length) * 100;
  }

  // --- Méthodes pour l'onglet Factures ---

  addInvoice(): void {
    if (this.newInvoice.denomination && this.newInvoice.montant && this.newInvoice.dateValidation) {
      this.invoices.push({ ...this.newInvoice });
      // Réinitialiser le formulaire
      this.newInvoice = {
        denomination: '',
        montant: null,
        quantite: null,
        marque: '',
        devise: 'USD',
        numeroFacture: '',
        statut: 'à payer',
        dateValidation: null,
        fichiers: null
      };
      this.showAutocomplete = false;
      // Il est aussi bon de réinitialiser le champ de fichier manuellement si nécessaire
      const fileInput = document.getElementById('fichiers') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }

  filterMaterials(): void {
    if (this.newInvoice.denomination) {
      this.filteredMaterials = this.materialsList.filter(material =>
        material.toLowerCase().includes(this.newInvoice.denomination.toLowerCase())
      );
      this.showAutocomplete = this.filteredMaterials.length > 0;
    } else {
      this.showAutocomplete = false;
    }
  }

  selectMaterial(material: string): void {
    this.newInvoice.denomination = material;
    this.showAutocomplete = false;
  }

  onFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      this.newInvoice.fichiers = element.files;
    }
  }

  // --- Méthodes pour l'onglet Communication ---

  onCommunicationFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      this.newPost.files = element.files;
    }
  }

  addPost(): void {
    if (this.newPost.comments || (this.newPost.files && this.newPost.files.length > 0)) {
      this.posts.unshift({ ...this.newPost, postDate: new Date() }); // Ajoute au début de la liste
      // Réinitialiser le formulaire
      this.newPost = {
        comments: '',
        mediaDate: null,
        files: null,
      };
      // Réinitialiser le champ de fichier
      const fileInput = document.getElementById('communicationFiles') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }
}