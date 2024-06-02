<template>
  <div class="panel">
    <div class="header">
      {{ propsData.title }}
    </div>
    <div class="body">
      <div class="panelContainer" ref="panelContainer">

      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import ECharts from '@/plugins/echarts'
import type { ECBasicOption } from 'echarts/types/src/util/types.js';

const propsData = defineProps(['title', 'config'])

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
.panel
  position relative
  display flex
  flex-direction column
  margin 0px 10px 10px
  background rgba(101, 132, 226, 0.1)
  .header
    text-align center
    line-height 40px
    color white
    font-size 20px
  .header::before,
  .header::after,
  .footer::before,
  .footer::after
    content ''
    display inline-block
    width 10px
    height 10px
    position absolute
  .header::before
    for direction in 'top' 'left'
      border-{direction} 3px solid rgb(4, 144, 164)
      {direction} 0
  .header::after
    for direction in 'top' 'right'
      border-{direction} 3px solid rgb(4, 144, 164)
      {direction} 0
  .footer::before
    for direction in 'bottom' 'left'
      border-{direction} 3px solid rgb(4, 144, 164)
      {direction} 0
  .footer::after
    for direction in 'bottom' 'right'
      border-{direction} 3px solid rgb(4, 144, 164)
      {direction} 0
  .body
    flex 1
    .panelContainer
      width 100%
      height 100%
</style>
