/* @jsx jsx */

import { ButtonCounter } from './app/ButtonCounter';
import { ClassComponent, jsx } from './mithrilInterop';

import './style.scss';

export class App extends ClassComponent {

	onChildClicked(e: number) {
		console.warn('callback from parent triggered', e);
	}

	view() {
		return (
			<div className="container pt-2">
				<h1>Mithril Typescript Starter Template</h1>

				<p>
					Simple Mithril Typescript TSX Template with a custom ButtonCounter Component.
				</p>

				<ButtonCounter name="Mithril TSX" onClicked={(e) => this.onChildClicked(e)} />
			</div>
		);
	}
}
