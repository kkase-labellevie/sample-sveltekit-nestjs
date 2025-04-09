<script lang="ts">
  import Avatar from '../atoms/ComponentsAtomsAvatar.svelte'
  import Button from '../atoms/ComponentsAtomsButton.svelte'
  import ProfileInfo from '../molecules/ComponentsMoleculesProfileInfo.svelte'
  import Text from '../atoms/ComponentsAtomsText.svelte'
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
