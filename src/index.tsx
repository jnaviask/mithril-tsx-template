/* @jsx jsx */

import { rootMount, jsx } from './mithrilInterop';
import { App } from './app';

rootMount(document.body as HTMLElement, <App />);
