<template>
  <main class="main">
    <CharacteristicsBlock />
    <HitsBlock />
    <IndexesBlock />
    <MasteryBlock />
    <ScillsBlock />
  </main>
</template>

<script>
import {
  CharacteristicsBlock,
  HitsBlock,
  IndexesBlock,
  MasteryBlock,
  ScillsBlock,
} from '@/components'

export default {
  name: 'HomePage',
  components: {
    CharacteristicsBlock,
    HitsBlock,
    IndexesBlock,
    MasteryBlock,
    ScillsBlock,
  },
}
</script>
