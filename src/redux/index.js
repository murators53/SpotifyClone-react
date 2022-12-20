import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './reducers/playerSlice'

export default configureStore({
    reducer: {
        playerState: playerSlice
    },
})