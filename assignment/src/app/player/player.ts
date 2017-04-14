export enum PlayerState {
	Stopped = 1,
	Playing,
	Paused
}

export class Player {

	element: any;

	constructor(rootElement: any) {
		this.element = rootElement;
	}

	state: PlayerState;

	play(): void {
		this.state = PlayerState.Playing;
		this.render();
	}

	pause(): void {
		this.state = PlayerState.Paused;
		this.render();
	}

	stop(): void {
		this.state = PlayerState.Stopped;
		this.render();
	}

	render(): void {
		let playerState = '';
		switch (this.state) {
			case PlayerState.Stopped:
				playerState = 'stopped';
				break;
			case PlayerState.Playing:
				playerState = 'playing';
				break;
			case PlayerState.Paused:
				playerState = 'paused';
				break;
		}
		this.element.innerHTML = '<p>The player is ' + playerState + '.</p>';
	}
}