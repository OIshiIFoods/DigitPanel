<template>
  <div class="digit-panel">
    <PanelHeader class="header" />
    <main class="main">
      <section class="column">
        <PanelScore class="panel-item" />
        <PanelPeopleCount class="panel-item"/>
        <PanelAge class="panel-item"/>
      </section>
      <section class="column">
        <PanelNum />
        <PanelMap class="panel-map"/>
      </section>
      <section class="column">
        <PanelSkill class="panel-item"/>
        <PanelPlayCount class="panel-item" />
        <PanelCountry class="panel-item"/>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import PanelHeader from '@/components/panel/PanelHeader.vue'
import PanelNum from '@/components/panel/PanelNum.vue'
import PanelMap from '@/components/panel/PanelMap.vue'
import PanelScore from '@/components/panel/PanelScore.vue'
import PanelPeopleCount from '@/components/panel/PanelPeopleCount.vue'
import PanelAge from '@/components/panel/PanelAge.vue'
import PanelSkill from '@/components/panel/PanelSkill.vue'
import PanelPlayCount from '@/components/panel/PanelPlayCount.vue'
import PanelCountry from '@/components/panel/PanelCountry.vue'
</script>

<style lang="stylus" scoped>
.digit-panel
  display flex
  flex-direction column
  overflow hidden
  width 100vw
  height 100vh
  background:#000 url('@/assets/images/bg.jpg') 0 0 /cover no-repeat
  .header
    height 80px
  .main
    flex:1
    display flex
    margin-top 10px
    .column
      flex 3
      display flex
      flex-direction column
      height 100%
      .panel-item
        flex 1
    .column:nth-child(2)
      flex 6
      & .panel-map
        flex 1
</style>
