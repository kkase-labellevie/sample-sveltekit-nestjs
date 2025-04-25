<script lang="ts">
  import Button from '../atoms/ComponentsAtomsButton.svelte'
  import { onMount } from 'svelte'
  import { css } from 'styled-system/css'

  let name = ''
  let job = ''
  let bio = ''

  async function handleSubmit() {
    const res = await fetch('/api/user-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, job, bio })
    })
    const data = await res.json()
    console.log(data)
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class={css({
    display: 'flex',
    flexDirection: 'column',
    gap: '4',
    maxWidth: '400px',
    mx: 'auto',
    mt: '8'
  })}
>
  <input
    placeholder="名前"
    bind:value={name}
    class={css({
      p: '2',
      border: '1px solid',
      borderColor: 'gray.300',
      borderRadius: 'md'
    })}
  />
  <input
    placeholder="職業"
    bind:value={job}
    class={css({
      p: '2',
      border: '1px solid',
      borderColor: 'gray.300',
      borderRadius: 'md'
    })}
  />
  <textarea
    placeholder="自己紹介"
    bind:value={bio}
    class={css({
      p: '2',
      border: '1px solid',
      borderColor: 'gray.300',
      borderRadius: 'md'
    })}
  ></textarea>
  <Button label="送信" type="submit" />
</form>
