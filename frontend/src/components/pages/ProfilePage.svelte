<script lang="ts">
  import { onMount } from 'svelte'
  import { css } from 'styled-system/css'
  import ProfileCard from '../organisms/ComponentsOrganismsProfileCard.svelte'
  import profileImg from '../../assets/image/bird_fukurou_run.png'

  let allData: {
    name: string
    job: string
    bio: string
    id: number
  }[]

  onMount(async () => {
    const res = await fetch('/api/user-data')
    allData = await res.json()
  })
</script>

<div
  class={css({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px'
  })}
>
  {#each allData as data (data.id)}
    <ProfileCard avatarUrl={profileImg} name={data.name} job={data.job} bio={data.bio} />
  {/each}
</div>

<a
  href="/"
  class={css({
    display: 'inline-block',
    backgroundColor: 'white',
    color: '#0073e6',
    fontSize: '18px',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '2px solid #0073e6',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      backgroundColor: '#0073e6',
      color: 'white',
      transform: 'scale(1.05)'
    },
    '&:active': {
      backgroundColor: '#003f87',
      color: 'white'
    },
    marginTop: '20px'
  })}
>
  Home
</a>
