import type { Ref } from 'vue'
import { Toast } from 'vant'

export function useValidate(el: Ref) {
    const doValidate = async () => {
        try {
            await el.value.validate()
            return true
        } catch (err: any) {
            const { message } = err[0] ?? {}
            message && Toast(message)
        }
    }

    return {
        doValidate
    }
}
