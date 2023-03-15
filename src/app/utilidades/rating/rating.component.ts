import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input() maximoRating = 5;
  @Input() ratingSeleccionado = 0;
  @Output() rated: EventEmitter<number> = new EventEmitter<number>();
  
  maximoRatingArr = [];
  hasVoted: Boolean = false
  ratingAnterior;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.maximoRatingArr = Array(this.maximoRating).fill(0); // rating inicial lleno de ceros
  }

  manejarMouseEnter(index: number): void{
    this.ratingSeleccionado = index + 1;
  }
  
  manejarMouseLeave () {
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado = 0;
    }
  }

  rate (index:number):void {
    this.ratingSeleccionado = index + 1;
    this.hasVoted = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

  //? esto igual funca
  // manejarMouseEnter(index: number): void{
  //   this.ratingSeleccionado = index + 1;
  // }
  
  // manejarMouseLeave () {
  //   if (!this.hasVoted) {
  //     this.ratingSeleccionado = 0;
  //   }
  // }

  // rate (index:number):void {
  //   this.ratingSeleccionado = index + 1;
  //   this.hasVoted = true;
  // }

}
