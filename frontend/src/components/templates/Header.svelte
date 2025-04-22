<script lang="ts">
  import { css } from 'styled-system/css'
</script>

<header
  class={css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: 'blue.500',
    color: 'white'
  })}
>
  <div
    class={css({
      fontSize: 'lg',
      fontWeight: 'bold'
    })}
  >
    SamplePage
  </div>
  <nav>
    <ul
      class={css({
        display: 'flex',
        listStyle: 'none',
        gap: '16px',
        margin: 0,
        padding: 0
      })}
    >
      <li>
        <a
          href="/"
          class={css({
            color: 'white',
            textDecoration: 'none',
            fontSize: 'md',
            '&:hover': {
              textDecoration: 'underline'
            }
          })}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/profile"
          class={css({
            color: 'white',
            textDecoration: 'none',
            fontSize: 'md',
            '&:hover': {
              textDecoration: 'underline'
            }
          })}
        >
          Profile
        </a>
      </li>
      <li>
        <a
          href="/"
          class={css({
            color: 'white',
            textDecoration: 'none',
            fontSize: 'md',
            '&:hover': {
              textDecoration: 'underline'
            }
          })}
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
</header>
