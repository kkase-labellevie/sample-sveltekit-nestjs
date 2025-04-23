<script lang="ts">
  import Button from '../atoms/ComponentsAtomsButton.svelte'
  async function sendMessage() {
    const res = await fetch('/api/kafka')
    const data = await res.json()
    console.log(data) // ここで { status: 'Message emitted!' }
  }
</script>

<Button label="Kafkaにメッセージ送信" onClick={sendMessage} />
