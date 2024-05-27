<template>
  <div class="digit-area">
    <div class="number">
      <span>125811</span>
      <span>125811</span>
    </div>
    <div class="desc">
      <span>前端需求人数</span>
      <span>市场供应人数</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="stylus">
.digit-area
  padding 10px
  background rgba(101, 132, 226, 0.1)
  margin 0 8px 5px
  .number,.desc
    display flex
    justify-content space-around
  .number
    position relative
    color rgb(253, 233, 122)
    border 1px solid rgba(255,255,255,.2)
    padding 8px 0
    font-family electronicFont
    font-size 60px
    &::before,
    &::after
      content ''
      display inline-block
      width 30px
      height 10px
      position absolute
    &::before
      for direction in 'top' 'left'
        border-{direction} 3px solid rgb(4, 144, 164)
        {direction} 0
    &::after
      for direction in 'bottom' 'right'
        border-{direction} 3px solid rgb(4, 144, 164)
        {direction} 0
    > span
      position relative
      width 100%
      text-align center
      &:nth-child(1)::after
        content ''
        position absolute
        right 0
        top 20%
        display inline-block
        width 1px
        height 60%
        background-color rgba(255,255,255,.4)
  .desc
    margin-top 10px
    color rgba(255,255,255,.5)
</style>
