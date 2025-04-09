<script lang="ts">
  import { css } from 'styled-system/css'
  import ProfileCard from '../organisms/ComponentsOrganismsProfileCard.svelte'
  import profileImg from '../../assets/image/bird_fukurou_run.png'
</script>

<div>
  <ProfileCard
    avatarUrl={profileImg}
    name="山田 太郎"
    job="フロントエンドエンジニア"
    bio="ReactとSvelteKitが得意なエンジニアです。"
  />
</div>

<a
  href="/"
  class={css({
    display: 'inline-block',
    backgroundColor: 'white', // 背景色を白に設定
    color: '#0073e6', // テキスト色
    fontSize: '18px',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '2px solid #0073e6', // 黒い線で囲む
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      backgroundColor: '#0073e6', // 背景色を青に
      color: 'white', // テキスト色を白に変更
      transform: 'scale(1.05)'
    },
    '&:active': {
      backgroundColor: '#003f87', // 背景色を濃い青に
      color: 'white' // テキスト色を白に変更
    },
    marginTop: '20px'
  })}
>
  Home
</a>
