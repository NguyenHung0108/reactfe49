import { QUAN_LY_SINH_VIEN } from "./types/QuanLySinhVienType"

const initialState = {
    mangSinhVien : [
        {maSV: 1, tenSV: "Nguyễn Văn Đẹp", sdt: '0999999999', email: 'deptrai@gmail.com'},
        {maSV: 2, tenSV: "Nguyễn Thị Trai", sdt: '0999999999', email: 'congai@gmail.com'},
    ]

}

export default (state = initialState, action) => {
    switch (action.type) {
        case QUAN_LY_SINH_VIEN: {
            
        }


    default:
        return state
    }
}
