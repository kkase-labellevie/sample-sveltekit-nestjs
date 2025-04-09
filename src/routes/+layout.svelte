<script lang="ts">
  import Header from '../components/templates/Header.svelte'
</script>

<Header />

<main>
  <slot></slot>
</main>

<style>
  main {
    padding: 2rem;
  }
</style>
