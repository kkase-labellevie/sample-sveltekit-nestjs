<script lang="ts">
  import { css } from 'styled-system/css'
</script>

<div
  class={css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto'
  })}
>
  <h1
    class={css({
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem'
    })}
  >
    HomePage
  </h1>

  <a
    href="/profile"
    class={css({
      color: '#0073e6',
      fontSize: '18px',
      textDecoration: 'none',
      marginBottom: '10px',
      padding: '8px 12px',
      borderRadius: '4px',
      transition: 'background-color 0.3s, color 0.3s',
      '&:hover': {
        backgroundColor: '#0073e6',
        color: 'white'
      },
      '&:active': {
        backgroundColor: '#005bb5'
      }
    })}
  >
    Profileページ
  </a>
</div>
