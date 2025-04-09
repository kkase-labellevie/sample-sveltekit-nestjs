<script lang="ts">
  import { css } from 'styled-system/css'
  import Avatar from '../atoms/ComponentsAtomsAvatar.svelte'
  import Button from '../atoms/ComponentsAtomsButton.svelte'
  import ProfileInfo from '../molecules/ComponentsMoleculesProfileInfo.svelte'
  import Bio from '../molecules/ComponentsMoleculesBio.svelte'
  import Text from '../atoms/ComponentsAtomsText.svelte'

  export let avatarUrl: string
  export let name: string
  export let job: string
  export let bio: string

  const handleFollow = () => {
    alert(`フォローしました: ${name}`)
  }
</script>

<div
  class={css({
    maxWidth: '320px', // max-width: 320px
    borderRadius: '8px', // 角丸
    overflow: 'hidden', // はみ出し防止
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // シャドウ
    padding: '24px', // パディング
    backgroundColor: 'white', // 背景色
    margin: '20px' // 余白
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
</div>
