<script setup lang="ts">
import { ElInput } from 'element-plus'

defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = ref<string>(user.savedName)
const { t } = useI18n()

function go() {
  if (name.value) {
    window.location.href = `/hi/${name.value}`
  }
}
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <ElInput
      v-model="name" autocomplete="false" :placeholder="t('intro.whats-your-name')" p="x-4 y-2" w="250px"
      text="center" bg="transparent" border="~ rounded gray-200 dark:gray-700" outline="none active:none" @keydown.enter="go"
    />

    <!-- <TheInput
      v-model="name" client:visible :placeholder="t('intro.whats-your-name')" autocomplete="false"
      @keydown.enter="go"
    /> -->
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button m-3 text-sm btn :disabled="!name" @click="go">
        确定
      </button>
    </div>
  </div>
</template>
