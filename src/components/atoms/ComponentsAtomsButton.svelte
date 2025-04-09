<script lang="ts">
  import { css } from 'styled-system/css'
  export let label: string
  export let onClick: () => void
</script>

<button
  on:click={onClick}
  class={css({
    px: '16px', // padding-left, padding-right
    py: '8px', // padding-top, padding-bottom
    bg: 'blue.500', // 背景色
    color: 'white', // 文字色
    borderRadius: '8px', // 角丸
    fontSize: 'lg', // フォントサイズ
    fontWeight: 'bold', // フォント太さ
    '&:hover': {
      bg: 'blue.600' // ホバー時の背景色
    },
    cursor: 'pointer' // カーソルをポインターに
  })}
>
  {label}
</button>
