import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


interface Componente { 
  icon: string; 
  name: string; 
  redirectTo: string; 
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    FormsModule
  ]
})
export class InicioPage implements OnInit {

    componentes: Componente[] = [
    {
      icon: 'person-circle-outline', 
      name: 'Avatar', 
      redirectTo: '/avatar'
    },
    
    { 
      icon: 'button-circle-outline', 
      name: 'Button', 
      redirectTo: '/button' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
