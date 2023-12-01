<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps<{ name: string }>()

// const router = useRouter()
// const route = useRoute('/hi/[name]')
// console.log(route)

const { t } = useI18n()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(props.name)
})

function goBack() {
  window.history.back()
}
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>
    <p>
      {{ t('intro.hi', { name: user.savedName }) }}
    </p>

    <p opacity-75 text-sm>
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <p mt-4 text-sm>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <a :href="`/hi/${otherName}`" replace>
              {{ otherName }}
            </a>
          </li>
        </ul>
        <!-- eslint-disable-next-line prettier/prettier -->
      </p>
    </template>

    <div>
      <button
        m="3 t6" text-sm btn
        @click="goBack"
      >
        {{ t('button.back') }}
      </button>
      <el-button>dddd</el-button>
    </div>
  </div>
</template>
