import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UserProfile {
  gender: 'homme' | 'femme' | 'autre' | '';
  lastName: string;
  postName: string;
  firstName: string;
  email: string;
  phoneFixed: string;
  phoneMobile: string;
  country: string;
  city: string;
  receivePromotions: boolean;
  acceptTerms: boolean;
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  countries: string[] = [
    'Afghanistan', 'Afrique du Sud', 'Albanie', 'Algérie', 'Allemagne', 'Andorre', 'Angola', 'Antigua-et-Barbuda',
    'Arabie Saoudite', 'Argentine', 'Arménie', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn',
    'Bangladesh', 'Barbade', 'Belgique', 'Belize', 'Bénin', 'Bhoutan', 'Biélorussie', 'Birmanie', 'Bolivie',
    'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunei', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cambodge',
    'Cameroun', 'Canada', 'Cap-Vert', 'Chili', 'Chine', 'Chypre', 'Colombie', 'Comores',
    'Congo-Brazzaville', 'République Démocratique du Congo', 'Corée du Nord', 'Corée du Sud', 'Costa Rica', "Côte d'Ivoire", 'Croatie', 'Cuba',
    'Danemark', 'Djibouti', 'Dominique', 'Égypte', 'Émirats arabes unis', 'Équateur', 'Érythrée', 'Espagne',
    'Estonie', 'Eswatini', 'États-Unis', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie',
    'Géorgie', 'Ghana', 'Grèce', 'Grenade', 'Guatemala', 'Guinée', 'Guinée-Bissau', 'Guinée équatoriale',
    'Guyana', 'Haïti', 'Honduras', 'Hongrie', 'Îles Cook', 'Îles Marshall', 'Îles Salomon', 'Inde',
    'Indonésie', 'Irak', 'Iran', 'Irlande', 'Islande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 'Jordanie',
    'Kazakhstan', 'Kenya', 'Kirghizistan', 'Kiribati', 'Koweït', 'Laos', 'Lesotho', 'Lettonie', 'Liban',
    'Libéria', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine du Nord', 'Madagascar',
    'Malaisie', 'Malawi', 'Maldives', 'Mali', 'Malte', 'Maroc', 'Maurice', 'Mauritanie', 'Mexique',
    'Micronésie', 'Moldavie', 'Monaco', 'Mongolie', 'Monténégro', 'Mozambique', 'Namibie', 'Nauru',
    'Népal', 'Nicaragua', 'Niger', 'Nigéria', 'Niue', 'Norvège', 'Nouvelle-Zélande', 'Oman', 'Ouganda',
    'Ouzbékistan', 'Pakistan', 'Palaos', 'Panama', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pays-Bas',
    'Pérou', 'Philippines', 'Pologne', 'Portugal', 'Qatar', 'République centrafricaine', 'République dominicaine',
    'République tchèque', 'Roumanie', 'Royaume-Uni', 'Russie', 'Rwanda', 'Saint-Christophe-et-Niévès',
    'Saint-Marin', 'Saint-Vincent-et-les-Grenadines', 'Sainte-Lucie', 'Salvador', 'Samoa', 'Sao Tomé-et-Principe',
    'Sénégal', 'Serbie', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Somalie',
    'Soudan', 'Soudan du Sud', 'Sri Lanka', 'Suède', 'Suisse', 'Suriname', 'Syrie', 'Tadjikistan', 'Tanzanie',
    'Tchad', 'Thaïlande', 'Timor oriental', 'Togo', 'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turkménistan',
    'Turquie', 'Tuvalu', 'Ukraine', 'Uruguay', 'Vanuatu', 'Vatican', 'Venezuela', 'Viêt Nam', 'Yémen', 'Zambie', 'Zimbabwe'
  ];

  user: UserProfile = {
    gender: '',
    lastName: '',
    postName: '',
    firstName: '',
    email: '',
    phoneFixed: '',
    phoneMobile: '',
    country: 'République Démocratique du Congo',
    city: '',
    receivePromotions: false,
    acceptTerms: false,
  };

  onSubmit(): void {
    if (this.user.acceptTerms) {
      console.log('Formulaire soumis:', this.user);
      // Ici, vous ajouteriez la logique pour envoyer les données à votre backend
    } else {
      alert('Veuillez accepter les conditions générales.');
    }
  }
}