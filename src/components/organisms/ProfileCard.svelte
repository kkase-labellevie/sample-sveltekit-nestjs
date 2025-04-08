<script lang="ts">
  import Avatar from '../atoms/Avatar.svelte'
  import Button from '../atoms/Button.svelte'
  import ProfileInfo from '../molecules/ProfileInfo.svelte'
  import Text from '../atoms/Text.svelte'
  export let avatarUrl: string
  export let name: string
  export let job: string
  export let bio: string

  const handleFollow = () => {
    alert(`フォローしました: ${name}`)
  }
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
  <Avatar src={avatarUrl} alt={name} />
  <ProfileInfo {name} {job} />
  <Text content={bio} size={14} />
  <Button label="フォローする" onClick={handleFollow} />
</div>
