<template>
  <div class="digit-panel">
    <div class="digit-panel-wrap" ref="digitPanelContainer">
      <PanelHeader class="header" />
      <main class="main">
        <section class="column">
          <PanelItem v-for="[title, config] in leftData" :title="title" :config="config" class="panel-item" />
        </section>
        <section class="column">
          <PanelNum />
          <PanelMap class="panel-map" :config="panelMapConfig" />
        </section>
        <section class="column">
          <PanelItem v-for="[title, config] in rightData" :title="title" :config="config" class="panel-item" />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PanelHeader from '@/components/panel/PanelHeader.vue';
import PanelItem from '@/components/panel/PanelItem.vue';
import PanelNum from '@/components/panel/PanelNum.vue';
import PanelMap from '@/components/panel/PanelMap.vue';
import { panelScoreConfig, panelSkillConfig, panelPersonConfig, panelPlayConfig, panelAgeConfig, panelCountryConfig, panelMapConfig } from '@/config/panels.config'

const panelsData = {
  '成绩面板': panelScoreConfig,
  '人员变化面板': panelPersonConfig,
  '年龄分布面板': panelAgeConfig,
  '技能面板': panelSkillConfig,
  '播放量面板': panelPlayConfig,
  '地区分布面板': panelCountryConfig
}

const leftData = Object.entries(panelsData).slice(0, 3)
const rightData = Object.entries(panelsData).slice(3)
const digitPanelContainer = ref<HTMLElement>()
const [designedWidth, designedHeight] = [1920, 1080]

onMounted(() => {
  setScale()
  window.addEventListener('resize', setScale)
})

const getScale = () => {
  let [ww, wh] = [window.innerWidth / designedWidth, window.innerHeight / designedHeight]
  return ww < wh ? ww : wh
}

const setScale = () => {
  if (!digitPanelContainer.value) {
    return
  }
  digitPanelContainer.value.style.width = designedWidth + 'px'
  digitPanelContainer.value.style.height = designedHeight + 'px'
  digitPanelContainer.value.style.transform = `scale(${getScale()})`;
}

</script>

<style lang="stylus" scoped>
.digit-panel,.digit-panel-wrap
  width 100vw
  height 100vh
.digit-panel
  display flex 
  justify-content center
  align-items center
  overflow hidden
  background:#000 url('@/assets/images/bg.jpg') 0 0 /100% 100% no-repeat
.digit-panel-wrap
  display flex
  flex-direction column
  .header
    height 80px
  .main
    flex:1
    display flex
    margin-top 10px
    .column
      width 550px
      display flex
      flex-direction column
      height 100%
      .panel-item
        flex 1
        overflow hidden
    .column:nth-child(2)
      width 820px
      & .panel-map
        flex 1
        overflow hidden
</style>
