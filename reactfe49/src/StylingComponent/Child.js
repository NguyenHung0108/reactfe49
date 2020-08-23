import React, { Component } from 'react';
import './Styling.scss';
import style from "./Styling.module.scss";

export default class Child extends Component {
    render() {
        return (
            <div>
            <div className="title">
                23435t
            </div>
            <div className={`${style.content}`}>rétyukgilohi</div>
            {/* or */}
            <div className={style.content}>NGjawerfgawer</div>

            <p style = {{borderColor:"red",background:"blue", padding:"20px"}}>

                ALIHRNVAERNV;ALERVAERVMAERVAEMRVAE
            </p>
            </div>
        )
    }
}
