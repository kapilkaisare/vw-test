import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { Player } from '../player/player';

@Component({
  selector: 'vrplayer',
  templateUrl: './vrplayer.component.html',
  styleUrls: ['./vrplayer.component.css']
})
export class VrplayerComponent implements OnInit {

  player: Player;
  nativeElement: any;

  @Input() url: string;

  @ViewChild('screen') screen;

  constructor() {}

  ngOnInit() {
    this.player = new Player(this.screen.nativeElement);
  }

  handleStopButtonClicked(ev: any): void {
    this.player.stop();
  }

  handlePlayButtonClicked(ev: any): void {
    this.player.play();
  }

  handlePauseButtonClicked(ev: any): void {
    this.player.pause();
  }
}
