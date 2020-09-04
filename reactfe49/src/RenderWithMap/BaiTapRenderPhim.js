import React, { Component } from 'react'
import dataPhim from "../RenderWithMap/DataFilms.json"

export default class BaiTapRenderPhim extends Component {


    renderContent = () => {
        return dataPhim.map((phim, index) => {
            return <div className="col-2" >
                <div className="card text-left" style={{ width: '100%', height: "100%" }}>
                    <img className="card-img-top" src={phim.hinhAnh} style={{ height: "300px" }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim.length > 30 ? <span>{phim.tenPhim.substring(0, 30)} ... </span> : <span>{phim.tenPhim}</span>}</h4>
                        {/* <p className="card-text">{phim.moTa.split(' ').slice(0, 7).join(' ') + "...."}</p> */}
                        <p className="card-text">
                            {phim.moTa.length > 75 ? <span>{phim.moTa.substring(0, 40)} ...</span> : <span>{phim.moTa}</span>}
                        </p>
                    </div>
                </div>


            </div>
        })

    }


    render() {
        return (
            <div style={{ backgroundImage: 'url("./img/avanger.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', minHeight: 1000 }}>
                <div className="container">
                    <div className="row">
                        {this.renderContent()}

                    </div>
                </div>
            </div>
        )
    }
}
