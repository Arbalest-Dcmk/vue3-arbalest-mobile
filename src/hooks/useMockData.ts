import { GoodsList, CategoryList, KolList } from '@/config/mock'
// 根据所选平台类型，返回对应平台数据
export default function useMockData() {
    const store = useStore()
    const type = computed(() => store.state.app.type)
    const typeName = computed(() => store.state.app.typeName)
    const typeGoodsList = computed(() =>
        type.value === 'all' ? GoodsList : GoodsList.filter(item => item.type === type.value)
    )
    const typeCategoryList = computed(() =>
        type.value === 'all' ? CategoryList : CategoryList.filter(item => item.type === type.value)
    )
    const typeKolList = computed(() =>
        type.value === 'all' ? KolList : KolList.filter(item => item.type === type.value)
    )

    return {
        type,
        typeName,
        goodsList: typeGoodsList,
        categoryList: typeCategoryList,
        kolList: typeKolList
    }
}
