<script setup lang="ts">
import { useRoute, useRouter, TagView } from 'vue-router'
import useTagsViewStore from 'Store/modules/tagsView'
// import usePermissionStore from 'Store/modules/permission'

const { proxy } = getCurrentInstance() as any

const visible = ref(false)
const top = ref(0)
const left = ref(0)
const route = useRoute()
const router = useRouter()
const selectedTag = ref<TagView>({})
// const affixTags = ref<TagView[]>([]);
const visitedViews = computed(() => useTagsViewStore().visitedViews)
// const routes = computed(() => usePermissionStore().routes)

watch(route, () => {
  addTags()
})

const isActive = (r: TagView): boolean => {
  return r.path === route.path
}

const isAffix = (tag: TagView) => {
  return tag.meta && tag.meta.affix
}

const addTags = () => {
  const { name } = route

  if (route.query.title) {
    route.meta.title = route.query.title
  }
  if (name) {
    useTagsViewStore().addView(route)

    if (route.meta.link) {
      useTagsViewStore().addIframeView(route)
    }
  }
  return false
}
const closeSelectedTag = (view: TagView) => {
  proxy?.$tab.closePage(view).then(({ visitedViews }: any) => {
    if (isActive(view)) {
      toLastView(visitedViews, view)
    }
  })
}
const toLastView = (visitedViews: TagView[], view?: TagView) => {
  const latestView = visitedViews.slice(-1)[0]
  if (latestView) {
    router.push(latestView.fullPath as string)
  } else {
    // now the default is to redirect to the home page if there is no tags-view,
    // you can adjust it according to your needs.
    if (view?.name === 'Dashboard') {
      // to reload home page
      router.replace({ path: '/redirect' + view?.fullPath })
    } else {
      router.push('/')
    }
  }
}
const openMenu = (tag: TagView, e: MouseEvent) => {
  const menuMinWidth = 105
  const offsetLeft = proxy?.$el.getBoundingClientRect().left // container margin left
  const offsetWidth = proxy?.$el.offsetWidth // container width
  const maxLeft = offsetWidth - menuMinWidth // left boundary
  const l = e.clientX - offsetLeft + 15 // 15: margin right

  if (l > maxLeft) {
    left.value = maxLeft
  } else {
    left.value = l
  }

  top.value = e.clientY - 50
  visible.value = true
  selectedTag.value = tag
}

defineOptions({
  name: 'TagsView',
})
</script>

<template>
  <div class="tag">
    <router-link
      v-for="tag in visitedViews"
      :key="tag.path"
      :data-path="tag.path"
      :class="isActive(tag) ? 'active' : ''"
      :to="{ path: tag.path ? tag.path : '', query: tag.query, fullPath: tag.fullPath ? tag.fullPath : '' }"
      class="tags-view-item"
      @click.middle="!isAffix(tag) ? closeSelectedTag(tag) : ''"
      @contextmenu.prevent="openMenu(tag, $event)"
    >
      <a-tag :bordered="false">
        {{ tag.title }}
        <span v-if="!isAffix(tag)" @click.prevent.stop="closeSelectedTag(tag)"> x </span></a-tag
      >
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  height: 34px;
  line-height: 34px;
  background-color: #fff;
  border: 1px solid #eee;
}
</style>
