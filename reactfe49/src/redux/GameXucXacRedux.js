const mangXucXac = [
    { ma: 1, hinhAnh: "./img/game_xuc_xac/1.png" },
    { ma: 2, hinhAnh: "./img/game_xuc_xac/2.png" },
    { ma: 3, hinhAnh: "./img/game_xuc_xac/3.png" },
    { ma: 4, hinhAnh: "./img/game_xuc_xac/4.png" },
    { ma: 5, hinhAnh: "./img/game_xuc_xac/5.png" },
    { ma: 6, hinhAnh: "./img/game_xuc_xac/6.png" }
]

const stateDefault = {
    banChon: true,
    soBanThang: 5,
    tongSoBanChoi: 0,
    mangXucXac: [
        { ma: 1, hinhAnh: "./img/game_xuc_xac/1.png" },
        { ma: 2, hinhAnh: "./img/game_xuc_xac/2.png" },
        { ma: 3, hinhAnh: "./img/game_xuc_xac/3.png" },
    ]
}
export const gameXucXacRedux = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC_TAI_XIU': {
            state.banChon = action.ketQuaChon;
            return{...state}
        }
        case 'PLAY_GAME': {
            //tạo ra 3 viên xúc xắc ngẫu nhiên add vào mảng xúc xắc ngẫu nhiên
            let mangXucXacNgauNhien = [];
            // Thực hiện random 3 lần để tạo ra 3 viên xúc xắc ngẫu nhiên đưa vào mảng 
            for (let i = 0; i<3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                //Từ ngẫu nhiên tạo ra các xúc xắc ngẫu nhiên
                let xucXacNgauNhien = mangXucXac[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            state.mangXucXac= mangXucXacNgauNhien;
            state.tongSoBanChoi += 1;
            //tính tổng điểm từ xúc sắc ngẫu nhiên
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem, xxnn, index) => {
                return tongDiem += xxnn.ma;
            }, 0);
            // so sánh tổng điểm và giá trị người dùng chọn 
            // nếu tổng điểm > 9 và bạn chọn true => thắng
            if ((tongDiem > 9 && state.banChon) || (tongDiem <= 9 && !state.banChon)) {
                state.soBanThang += 1;
            }

            return{...state};
        }
    }


    return {...state};
}