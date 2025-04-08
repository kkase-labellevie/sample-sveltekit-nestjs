<script lang="ts">
  export let src: string
  export let alt: string
  export let size: number = 80
</script>

<img src={`${src}`} {alt} width={size} height={size} class="rounded-full" />
