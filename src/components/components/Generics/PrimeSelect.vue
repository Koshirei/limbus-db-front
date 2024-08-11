<template>
  <PSelect
      v-model="model"
      :options="props.options"
      :placeholder="props.placeholder"
      :optionValue="props.optionValue"
      :optionLabel="props.optionLabel"
      @hide="blurElement()"
      @change="changeEvent()"
  >

    <template #option="option: optionSlotInterface">
      <div v-if="props.type === 'flag'" class="flagFlexInner">
        <div v-html="option.option.additionalData as string" style="width: 30px; height: 100%" class="centerCol flag"/>
        <div class="centerCol">&nbsp;&nbsp;{{ option.option.label }}</div>
      </div>
    </template>


    <template #value="value: valueSlotInterface">
      <div v-if="props.type === 'flag'">
        <div v-html="getAdditionalDataFromValue(value)" class="centerCol flag"/>
      </div>
    </template>
  </PSelect>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { SelectOptionInterface } from '@/Utils/Interfaces/GenericComponentInterfaces.ts'

const model = defineModel({ required: true })

const emits = defineEmits(['change'])
const props = defineProps({
  placeholder: {
    required: false,
    type: String,
    default: ''
  },
  optionLabel: {
    required: false,
    type: String,
    default: 'label'
  },
  optionValue: {
    required: false,
    type: String,
    default: 'value'
  },
  options: {
    required: true,
    type: Object as PropType<SelectOptionInterface[]>
  },
  type: {
    required: false,
    type: String,
    default: 'default'
  }
})

const getAdditionalDataFromValue = (value: valueSlotInterface): string => {
  return props.options.find((option) => {
    return option.value === value.value
  })!.additionalData
}

const blurElement = () => {
  (document.activeElement as HTMLElement)?.blur()
}

const changeEvent = () => {
  emits('change')
}


interface optionSlotInterface {
  option: SelectOptionInterface,
  selected: boolean,
  index: number
}

interface valueSlotInterface {
  value: string | number,
  placeholder: string
}

</script>

<style lang="less" scoped>

.flag {
  width: 30px;
  height: 100%;
}

.flagFlexInner {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.centerCol {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>