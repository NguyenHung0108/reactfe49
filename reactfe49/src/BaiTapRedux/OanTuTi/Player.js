import React, { Component } from 'react';
import {connect} from 'react-redux';

class Player extends Component {
    renderNguoiChoi = () => {
        return (
            <img className = "speech-bubble" style = {{width:100}} src ={this.props.mangLuaChon.find(item=> item.ma === this.props.nguoiChon).hinhAnh} />
        )
            
    }
    
    render() {
        return (
            <div className = "col-3 p-5">
                {this.renderNguoiChoi()}
                
                <div className = "speech-bubble"></div>
                <img style = {{width:250}} src = "./img/gameOanTuTi/player.png"/>
                <div className = "row">
                <img className = "choice" style={{cursor:'pointer'}} onClick={()=>{this.props.datCuoc(1)}} src = "./img/gameOanTuTi/bao.png"/> 
                <img className = "choice" style={{cursor:'pointer'}} onClick={()=>{this.props.datCuoc(2)}} src = "./img/gameOanTuTi/bua.png"/>
                <img className = "choice" style={{cursor:'pointer'}} onClick={()=>{this.props.datCuoc(3)}} src = "./img/gameOanTuTi/keo.png"/>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (nguoiChon)=> {
            let action = {
                type: 'DAT_CUOC',
                nguoiChon
            }
            dispatch(action)
        }
    }
}
const mapStateToProps = state => {
    return {
        mangLuaChon: state.BaiTapGameOanTuTiReducer.mangLuaChon,
        nguoiChon: state.BaiTapGameOanTuTiReducer.nguoiChon
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
