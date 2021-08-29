# astro-firebase-bug-reproduction

This repo is a reproduction of a bug when using Firebase JS SDK (v9) with [astro](https://astro.build)

## Observe this reproduction locally

1. Clone this repo
2. `npm i`
3. `npm run start`

## Steps to create this reproduction

1. `npm init astro`. Choose skeleton with Svelte.js as the framework.
2. `npm i`
3. `npm i firebase`
4. Import Firebase in `src/components/svelteCounter.svelte`
	```diff
	+import { initializeApp, getApps } from "firebase/app";
	+import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";
	let count = 0;
	```
5. `npm run start`
6. Error is shown in browser console and Counter does not work.

	```
	Loading failed for the module with source “node:process”.
	Uncaught (in promise) TypeError: error loading dynamically imported module
	Loading failed for the module with source “http://localhost:3000/_snowpack/pkg/@firebase.webchannel-wrapper.v0.5.1.js”.
	```

This error is specific to importing Firestore as the app works when `import { ... } from "firebase/firestore";` is commented out.
