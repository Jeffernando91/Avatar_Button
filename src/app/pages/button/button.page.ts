import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components-module';


@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule
  ]
})
export class ButtonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
