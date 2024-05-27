<template>
  <div class="panel">
    <div class="header"></div>
    <slot></slot>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="stylus">
.panel
  position relative
  margin 0px 10px 10px
  background rgba(101, 132, 226, 0.1)
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
</style>
