<script lang="ts">
  import { css } from 'styled-system/css'
  import Avatar from '../atoms/ComponentsAtomsAvatar.svelte'
  import Button from '../atoms/ComponentsAtomsButton.svelte'
  import ProfileInfo from '../molecules/ComponentsMoleculesProfileInfo.svelte'
  import Bio from '../molecules/ComponentsMoleculesBio.svelte'

  export let avatarUrl: string
  export let name: string
  export let job: string
  export let bio: string
  export let onDelete: () => void

  const handleFollow = () => {
    alert(`フォローしました: ${name}`)
  }
</script>

<div
  class={css({
    maxWidth: '320px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    backgroundColor: 'white',
    margin: '20px'
  })}
>
  <Avatar src={avatarUrl} alt={name} />
  <ProfileInfo {name} {job} />
  <div class={css({ marginTop: '10px' })}>
    <Bio {bio} size={14} />
  </div>
  <div class={css({ marginTop: '20px' })}>
    <Button label="フォローする" onClick={handleFollow} />
  </div>
  <div class={css({ marginTop: '20px' })}>
    <Button label="削除する" type="button" variant="attention" onClick={onDelete} />
  </div>
</div>
