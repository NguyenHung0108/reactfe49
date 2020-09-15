import React, { Component } from 'react'
import Computer from './Computer'
import KetQuaChoi from './KetQuaChoi'
import Player from './Player'
import './StyleGame/style.css'

export default class BaiTapGameOanTuTi extends Component {
    render() {
        return (
            <div className = "oanTuTi container-fluid">
                <div className = "row">
                    <Player />
                    <div className = "col-6">
                        <KetQuaChoi />
                    </div>
                    <Computer />
                </div>
            </div>
        )
    }
}
