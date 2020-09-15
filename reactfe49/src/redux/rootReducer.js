import {combineReducers} from 'redux';
import BaiTapGameOanTuTiReducer from './GameOanTuTiReducer';
import {gameXucXacRedux} from './GameXucXacRedux';
import QuanLySinhVienRudecer from './QuanLySinhVienReducer'
export const rootReducer = combineReducers ({
    stateGameXucXac: gameXucXacRedux,
    BaiTapGameOanTuTiReducer: BaiTapGameOanTuTiReducer,
    QuanLySinhVienRudecer: QuanLySinhVienRudecer,
    
})