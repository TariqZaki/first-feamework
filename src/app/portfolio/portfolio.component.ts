import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {

  isHide: boolean = true;
  modelImg:string = '';

  images: string[] = [
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
  ];

  hideModel( eleTrget:EventTarget | null , photoRef:HTMLImageElement ):void
  {
    if(eleTrget == photoRef)
      {
        return;
    }else{
      this.isHide =true;
    }
  }
}
