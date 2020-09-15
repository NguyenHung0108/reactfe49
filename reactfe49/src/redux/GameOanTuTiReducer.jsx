
const stateDefault = {
    nguoiChon: 2,
    ketQua: "I'm iron man, i love you 3000!!",
    soBanThang: 0,
    tongSoBanChoi: 0,
    mayChon: 2,
    mangLuaChon : [
        { ma: 1, hinhAnh: "./img/gameOanTuTi/bao.png" },
        { ma: 2, hinhAnh: "./img/gameOanTuTi/bua.png" },
        { ma: 3, hinhAnh: "./img/gameOanTuTi/keo.png" },
    ]
   
}

const BaiTapGameOanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            
                state.nguoiChon = action.nguoiChon;
                console.log(state.nguoiChon)
                return{...state}
                
            
        break;
        case 'PLAY_GAME': 
        
            let soNgauNhien = Math.floor(Math.random() * 3) + 1;
            state.mayChon = soNgauNhien;
            state.tongSoBanChoi += 1;
            const soLech = state.nguoiChon - state.mayChon;
            if (soLech === 0) {
                state.ketQua = "Hòa  !!";
            }
            else
            if (soLech === 1 || soLech === -2) {
                state.ketQua = "Thua sấp mặt !!";
            }
            else {
                state.ketQua ="Thắng cmnr !!!"
                state.soBanThang += 1;
            }



            return{...state}
        
        break;
        default: return {...state};
    
    }
}
export default BaiTapGameOanTuTiReducer;