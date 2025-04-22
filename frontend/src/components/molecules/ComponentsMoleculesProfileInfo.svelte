<script lang="ts">
  import { css } from 'styled-system/css'
  import Text from '../atoms/ComponentsAtomsText.svelte'
  export let name: string
  export let job: string
</script>

<div>
  <ul
    class={css({
      paddingLeft: '20px', // インデントを追加
      listStyleType: 'disc', // アイテムに丸印を追加
      color: 'gray.700' // テキストの色を指定
    })}
  >
    <li><Text content={name} size={20} /></li>
    <li><Text content={job} size={14} /></li>
  </ul>
</div>
