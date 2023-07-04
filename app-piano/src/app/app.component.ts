import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-piano';
  aplicarSonido(number:number):void{
    const audio=new Audio();
   audio.src='../assets/sonido/note'+number+'.wav'
   audio.load();
   audio.play();
}
}
