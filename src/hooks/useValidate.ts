import type { Ref } from 'vue'
import { showToast } from 'vant'

export function useValidate(el: Ref) {
    const doValidate = async () => {
        try {
            await el.value.validate()
            return true
        } catch (err: any) {
            const { message } = err[0] ?? {}
            message && showToast(message)
        }
    }

    return {
        doValidate
    }
}
