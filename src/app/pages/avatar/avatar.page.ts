import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components-module';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule
  ]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

}
