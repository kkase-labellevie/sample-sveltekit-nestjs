<script lang="ts">
  import Text from '../atoms/Text.svelte'
  export let name: string
  export let job: string
</script>

<div class="text-center mt-4">
  <Text content={name} size={20} />
  <Text content={job} size={14} />
</div>
