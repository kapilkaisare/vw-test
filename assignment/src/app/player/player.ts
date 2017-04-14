export enum PlayerState {
	Stopped = 1,
	Playing,
	Paused
}

export class Player {

	constructor() {

	}

	state: PlayerState

	play(): void {
		console.log('Playing');
		this.state = PlayerState.Playing;
	}

	pause(): void {
		console.log('Paused');
		this.state = PlayerState.Paused;
	}

	stop(): void {
		console.log('Stopped.');
		this.state = PlayerState.Stopped;
	}
}