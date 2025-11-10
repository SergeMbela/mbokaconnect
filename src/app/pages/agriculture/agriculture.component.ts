import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Harvest {
  plantName: string;
  area: number | null;
  sowingDate: string | null;
  expectedHarvestDate: string | null;
  actualHarvestDate: string | null;
  quantityKg: number | null;
  bagCount: number | null;
  photos: FileList | null;
}

interface AgriInvoice {
  denomination: string;
  commentaires: string;
  dateFacture: string | null;
  statut: 'payer' | 'à payer' | 'contester';
  factureFile: FileList | null;
}

@Component({
  selector: 'app-agriculture',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajout de CommonModule et FormsModule pour les directives Angular
  templateUrl: './agriculture.component.html',
  styleUrl: './agriculture.component.css'
})
export class AgricultureComponent {
  activeTab: 'recolte' | 'factures' | 'communication' = 'recolte';

  // --- Données pour l'onglet Récolte ---
  newHarvest: Harvest = {
    plantName: '',
    area: null,
    sowingDate: null,
    expectedHarvestDate: null,
    actualHarvestDate: null,
    quantityKg: null,
    bagCount: null,
    photos: null,
  };
  harvests: Harvest[] = [];
  plantsList: string[] = [
    'Maïs', 'Manioc', 'Arachide', 'Haricot', 'Soja', 'Riz', 'Banane',
    'Patate douce', 'Tomate', 'Piment', 'Gombo', 'Aubergine', 'Canne à sucre'
  ];
  filteredPlants: string[] = [];
  showAutocomplete = false;

  // --- Données pour l'onglet Factures ---
  newAgriInvoice: AgriInvoice = {
    denomination: '',
    commentaires: '',
    dateFacture: null,
    statut: 'à payer',
    factureFile: null,
  };
  agriInvoices: AgriInvoice[] = [];

  // --- Méthodes pour l'onglet Récolte ---

  addHarvest(): void {
    if (this.newHarvest.plantName && this.newHarvest.area && this.newHarvest.sowingDate) {
      this.harvests.unshift({ ...this.newHarvest }); // Ajoute au début de la liste
      // Réinitialiser le formulaire
      this.newHarvest = { plantName: '', area: null, sowingDate: null, expectedHarvestDate: null, actualHarvestDate: null, quantityKg: null, bagCount: null, photos: null };
      this.showAutocomplete = false;
      const fileInput = document.getElementById('photos') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }

  filterPlants(): void {
    if (this.newHarvest.plantName) {
      this.filteredPlants = this.plantsList.filter(plant =>
        plant.toLowerCase().includes(this.newHarvest.plantName.toLowerCase())
      );
      this.showAutocomplete = this.filteredPlants.length > 0;
    } else {
      this.showAutocomplete = false;
    }
  }

  selectPlant(plant: string): void {
    this.newHarvest.plantName = plant;
    this.showAutocomplete = false;
  }

  onPhotoSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      this.newHarvest.photos = element.files;
    }
  }

  // --- Méthodes pour l'onglet Factures ---

  onAgriInvoiceFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      this.newAgriInvoice.factureFile = element.files;
    }
  }

  addAgriInvoice(): void {
    if (this.newAgriInvoice.denomination && this.newAgriInvoice.dateFacture) {
      this.agriInvoices.unshift({ ...this.newAgriInvoice });
      // Réinitialiser le formulaire
      this.newAgriInvoice = { denomination: '', commentaires: '', dateFacture: null, statut: 'à payer', factureFile: null };
      const fileInput = document.getElementById('factureFile') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }
}