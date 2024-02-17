import { Component,OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from '../footer/footer.component';
import { ScrollTopModule } from 'primeng/scrolltop';

import { DataViewModule } from 'primeng/dataview';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CarouselModule,DialogModule,ButtonModule,FooterComponent,ScrollTopModule,DataViewModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  
  ngOnInit() {

  }
  products:any=[
    {category:"Olves Man's", price:'1000',name:'Branded',image: '../../assets/watches/first.jpg' },
    {category:"Olves Man's", price:'800',name:'Branded',image: '../../assets/watches/second.jpg' },
    {category:"Olves Man's", price:'1200',name:'Branded water proof',image: '../../assets/watches/third.jpg' },
    {category:'Olves Crown', price:'1500',name:'Branded',image: '../../assets/watches/forth.jpg' },
    {category:'Olves Simple', price:'500',name:'Branded',image: '../../assets/watches/fifth.jpg' },
    {category:'abcccc', price:'500',name:'Branded',image: '../../assets/watches/six.jpg' }, 

  ]

  position: any = 'center';

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  closeDialog() {
      this.visible = false;
  }
 
  
}
