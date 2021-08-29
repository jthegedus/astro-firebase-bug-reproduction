<script>
  import { initializeApp, getApps } from "firebase/app";
  // import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";

  let count = 0;

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

<div id="svelte" class="counter">
  <button on:click={subtract}>-</button>
  <pre>{ count }</pre>
  <button on:click={add}>+</button>
</div>
