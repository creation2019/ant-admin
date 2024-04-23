<template>
  <inner-link
    v-for="(item, index) in tagsViewStore.iframeViews"
    :key="item.path"
    :iframeId="'iframe' + index"
    v-show="route.path === item.path"
    :src="item.meta ? item.meta.link : ''"
  ></inner-link>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import InnerLink from 'Components/InnerLink/index.vue'
import useTagsViewStore from 'Store/modules/tagsView'

const route = useRoute()
const tagsViewStore = useTagsViewStore()

defineOptions({
  name: 'iframe-toggle',
})
</script>
