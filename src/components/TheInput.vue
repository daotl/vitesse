<script setup lang="ts">
import { ElInput } from 'element-plus'

const { t } = useI18n()
// const { modelValue } = defineModels<{
//   modelValue: string
// }>()
const text = ref('')
// function change(e: Event): void {
//   text.value = e.target?.addEventListener('change',(e) => {
//     e.target.value
//   })
// }
</script>

<template>
  <ElInput
    v-model="text" v-bind="$attrs" :placeholder="t('intro.whats-your-name')" p="x-4 y-2" w="250px" text="center" bg="transparent"
    border="~ rounded gray-200 dark:gray-700" outline="none active:none"
  />
  <!-- <input
    id="input"
    :value="text"
    type="text"
    v-bind="$attrs"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
  > -->
</template>
