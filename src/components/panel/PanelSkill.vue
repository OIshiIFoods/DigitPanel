<template>
  <PanelItem>
    <template #header>
      技能柱状统计图
    </template>
    <div class="panelContainer" ref="panelContainer"></div>
  </PanelItem>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import ECharts from '@/plugins/echarts'
import type { ECBasicOption } from 'echarts/types/src/util/types.js';

import PanelItem from '@/components/panel/PanelItem.vue'
import panelSkillConfig from '@/config/panelsConfig/panelSkill.config';

let panelContainer: Ref<HTMLElement | undefined> = ref()
let echart: ECharts.ECharts
let option: ECBasicOption = panelSkillConfig

onMounted(() => {
  echart = ECharts.init(panelContainer.value)
  echart.setOption(option)
  window.addEventListener('resize', () => echart.resize())
})

</script>

<style scoped lang="stylus">
.panelContainer
  width 100%
  height 100%
</style>
