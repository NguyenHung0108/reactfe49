import React, { Component } from 'react';
import {connect} from 'react-redux'

 class Computer extends Component {
    render() {
        return (
            <div className = "col-3 p-5">
                <img className = "speech-bubble"  style = {{width:100}} src = {this.props.mangLuaChon[this.props.mayChon - 1].hinhAnh}/>
                <div className = "speech-bubble"> </div>
                <img style = {{width:250}} src = "./img/gameOanTuTi/playerComputer.png"/>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mayChon: state.BaiTapGameOanTuTiReducer.mayChon,
        mangLuaChon: state.BaiTapGameOanTuTiReducer.mangLuaChon,
    }
}
export default connect(mapStateToProps)(Computer)

