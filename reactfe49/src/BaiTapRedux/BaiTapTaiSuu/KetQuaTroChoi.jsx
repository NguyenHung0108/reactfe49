import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        const { banChonCom, soBanThang, tongSoBanChoi } = this.props;

        return (
            <div className="container ">
                <div className="text-center display-4">
                    TỔNG ĐIỂM:  <span className="text-danger">12</span>
                </div>
                <div className="text-center display-4">
                    BẠN CHỌN:  <span className="text-danger">{banChonCom ? "TÀI" : "XỈU"}</span>
                </div>
                <div className="text-center display-4">
                    SỐ BÀN THẮNG: <span className="text-success">{soBanThang}</span>
                </div>
                <div className="text-center display-4">
                    TỔNG SỐ BÀN CHƠI: <span className="text-primary">{tongSoBanChoi}</span>
                </div>
                <div className="text-center display-4">
                    <button className="btn btn-warning" onClick={this.props.playGame}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}
//Lấy giá trị từ state redux và biến đổi thành props của component
const mapStateToProps = state => {
    return {
        banChonCom: state.stateGameXucXac.banChon,
        soBanThang: state.stateGameXucXac.soBanThang,
        tongSoBanChoi: state.stateGameXucXac.tongSoBanChoi,
        mangXucSac: state.stateGameXucXac.mangXucSac,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)