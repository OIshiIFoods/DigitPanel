<template>
  <header class="header">
    <h1 class="title">数字面板</h1>
    <div class="time">
      <span>当前时间:{{ curTime }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { dateFormat } from '@/utils/DateTools';
let timeFormat = 'yyyy年MM月dd日-hh时mm分ss秒'
let curTime = ref(dateFormat(timeFormat))
setInterval(()=>{
  curTime.value = dateFormat(timeFormat)
},1000)

</script>

<style lang="stylus" scoped>
.header
  position relative
  display flex
  justify-content center
  align-items center
  background: url('@/assets/images/head_bg.png') center/cover no-repeat
  & .title
    color white
  & .time
    position absolute
    right 30px
    top calc(50% - 10px)
    color rgba(255,255,255,.5)
    line-height 20px
    font-size 15px
</style>
