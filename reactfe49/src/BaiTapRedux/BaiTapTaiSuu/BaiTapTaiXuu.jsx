import React, { Component } from 'react'
import XucXac from './XucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
import './styleGame/styleGame.css'

export default class BaiTapTaiXuu extends Component {
    render() {
        return (
            <div className = "gameXucXac">
                <h1 className = "text-danger display-4">BÀI TẬP GAME XÚC XẮC</h1>
                <XucXac/>
                <KetQuaTroChoi/>
            </div>
        )
    }
}
