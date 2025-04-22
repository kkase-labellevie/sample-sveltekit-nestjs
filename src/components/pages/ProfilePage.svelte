<script lang="ts">
  import { css } from 'styled-system/css'
  import { setContext } from 'svelte'
  import ProfileCard from '../organisms/ComponentsOrganismsProfileCard.svelte'
  import profileImg from '../../assets/image/bird_fukurou_run.png'

<<<<<<< HEAD
  const data = {
    name: '山田 太郎',
    job: 'フロントエンドエンジニア',
    bio: 'ReactとSvelteKitが得意なエンジニアです。'
  }
=======
  const testData = {
    test: 'ContextTestData'
  }
  setContext('test', testData)
>>>>>>> 5849067a00dc8312ac751de9e52e9f7f59abe823
</script>

<div>
  <ProfileCard avatarUrl={profileImg} name={data.name} job={data.job} bio={data.bio} />
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
