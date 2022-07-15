import storage from './storage'
import request from './axios'
import { camelToSnake, snakeToCamel } from './transfer'
export { storage, request, camelToSnake, snakeToCamel }

export const numberToW = (num: number) => {
    if (Number(num) >= 10000) {
        return (num / 10000).toFixed(1) + 'w'
    } else {
        return num
    }
}
