import React, { Component } from 'react';
import { connect } from 'react-redux'

class KetQuaChoi extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="text-center text-warning" style={{ fontSize: 50 }}>
                    {this.props.ketQua}
                </div>
                <div className="text-center text-success" style={{ fontSize: 40 }}>
                    Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
                </div>
                <div className="text-center text-success" style={{ fontSize: 40 }}>
                    Số bàn chơi: <span className="text-warning">{this.props.tongSoBanChoi}</span>
                </div>
                <div className="text-center display-4">
                    <button className="btn btn-success" onClick={() => {
                        this.props.playGame()
                    }}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        soBanThang: state.BaiTapGameOanTuTiReducer.soBanThang,
        tongSoBanChoi: state.BaiTapGameOanTuTiReducer.tongSoBanChoi,
        ketQua: state.BaiTapGameOanTuTiReducer.ketQua
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
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaChoi) 