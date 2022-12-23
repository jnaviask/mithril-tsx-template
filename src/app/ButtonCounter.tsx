/* @jsx jsx */

import { ClassComponent, jsx, ResultNode } from "../mithrilInterop";

export interface IAttrs {
	name: string;
	onClicked: (e: number) => void;
}

export class ButtonCounter extends ClassComponent<IAttrs> {
	count: number = 0;

	oncreate(v: ResultNode<IAttrs>) {
		console.info('oncreate', v);
	}

	handleClick(onclickedHandler: Function) {
		this.count++;
		onclickedHandler(this.count);
	}

	view(vnode: ResultNode<IAttrs>) {
		return (
			<button onclick={() => this.handleClick(vnode.attrs.onClicked)} class="btn btn-outline-secondary">
				{vnode.attrs.name} - You clicked me {this.count} times
			</button>
		);
	}
}
