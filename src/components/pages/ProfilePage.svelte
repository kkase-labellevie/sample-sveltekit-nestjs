<script lang="ts">
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
