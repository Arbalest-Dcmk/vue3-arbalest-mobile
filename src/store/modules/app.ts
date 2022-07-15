import { Module } from 'vuex'
import { RootState } from '../index'

export interface AppModule {
    date: Date | string
    type: string
    typeName: string
}

const app: Module<AppModule, RootState> = {
    namespaced: true,
    state: {
        date: '2022-03-10',
        type: 'all',
        typeName: '总体'
    },
    mutations: {
        setDate: (state, date) => {
            state.date = date
        },
        setType: (state, { type, typeName }) => {
            state.type = type
            state.typeName = typeName
        }
    }
}

export default app
