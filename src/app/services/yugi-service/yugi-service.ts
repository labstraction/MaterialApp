import { Injectable, signal } from '@angular/core';
import { Card } from '../../model/card';

@Injectable({
  providedIn: 'root',
})
export class YugiService {

  url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20"

  cards = signal<Card[]>([]);

  constructor(){
    this.getCards()
  }

  getCards(){
    fetch(this.url)
    .then(resp => resp.json())
    .then(result => this.cards.set(result.data));
  }
  
}
