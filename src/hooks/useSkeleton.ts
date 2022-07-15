// 骨架屏
export default function useSkeleton(duration = 300) {
    const skeletonLoading = ref(true)
    onMounted(() => {
        setTimeout(() => {
            skeletonLoading.value = false
        }, duration)
    })
    return {
        skeletonLoading
    }
}
