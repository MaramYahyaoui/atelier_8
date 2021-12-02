import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { AuthService } from '../services/auth.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits : Produit[]; 

  constructor(private produitService: ProduitService ,
    public authService: AuthService) {
    this.produits = produitService.listeProduits();

  }

  ngOnInit(): void {
  }
  supprimerProduit(prod:Produit)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.produitService.supprimerProduit(prod);
  }

}
