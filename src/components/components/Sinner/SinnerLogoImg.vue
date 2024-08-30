<template>
  <div>
    <img :src="'/sinners/sinnerlogo_' + props.id + '.webp'"
         :alt="props.name" />
    <br/>
    <n-h2>
      {{ props.name }}
    </n-h2>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  id: {
    required: true,
    type: Number
  },
  name: {
    required: true,
    type: String
  }
})
</script>

<style scoped lang="less">
@import url("@/assets/main");

div {
  text-align: center;
  width: fit-content;
}
img{
  width: 128px;
  border-radius: 10px;
}
</style>