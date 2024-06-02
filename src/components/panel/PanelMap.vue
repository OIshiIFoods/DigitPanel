<template>
  <div class="map-panel">
    <div class="panelContainer" ref="panelContainer"></div>
    <div class="map-bg1"></div>
    <div class="map-bg2"></div>
    <div class="map-bg3"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import ECharts from '@/plugins/echarts'
import type { ECBasicOption } from 'echarts/types/src/util/types.js';

const propsData = defineProps(['config'])

let panelContainer: Ref<HTMLElement | undefined> = ref()
let echart: ECharts.ECharts
let option: ECBasicOption = propsData.config

onMounted(() => {
  echart = ECharts.init(panelContainer.value)
  echart.setOption(option)
  window.addEventListener('resize', () => echart.resize())
})
</script>

<style scoped lang="stylus">
.map-panel
  position relative
  display flex
  justify-content center
  align-items center
  .panelContainer
    z-index 4
    width 100%
    height 100%
    position absolute
  .map-bg1,.map-bg2,.map-bg3
    position absolute
    opacity .5
  .map-bg1
    z-index 1
    width 50%
    aspect-ratio 1
    background url('../../assets/images/map.png') 0/100% no-repeat
  .map-bg2
    z-index 2
    width 55%
    aspect-ratio 1
    background url('../../assets/images/jt.png') 0/100% no-repeat
    animation rotate 15s reverse linear infinite
  .map-bg3
    z-index 3
    width 60%
    aspect-ratio 1
    background url('../../assets/images/lbx.png') 0/100% no-repeat
    animation rotate 15s linear infinite

@keyframes rotate {
  from{
    transform rotate(0deg)
  }
  to{
    transform rotate(360deg) 
  }
}
</style>
