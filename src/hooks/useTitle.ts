import { TITLE } from '@/config'

export function useTitle() {
    const route = useRoute()
    const title = computed(() => route.meta?.title ?? TITLE)
    watch(title, () => (document.title = `${title.value}`), { immediate: true })
}
