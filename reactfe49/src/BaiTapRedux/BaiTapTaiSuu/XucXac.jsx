import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    renderXucXac = () => {
        // lấy mangXucXac tuwfw redux về binding ra giao diện 
        const {mangXucXac} = this.props;
        return mangXucXac.map((XucXac, index) => {
            return <img className = "ml-5" style = {{width: 60}} key = {index} src = {XucXac.hinhAnh} alt = {XucXac.hinhAnh}/>
        })
    }
    render() {
        let {banChon} = this.props
        return (
            <div className = "container-fluid">
               <div className = "row mt-5">
                   <div className = "col-3">
                       <button style = {{fontSize:"40", borderRadius: '20%',border: banChon ? '10px solid red' : 'none'}} className = " btn-warning p-4 display-4 ml-5" onClick = {()=>{
                           this.props.datCuocTaiXiu(true)
                       }}>Tài</button>
                   </div>
                   <div className = "col-6">
                       {this.renderXucXac()}
                   </div>
                   <div className = "col-3">
                   <button style = {{fontSize:"40", borderRadius: '20%',border: !banChon ? '10px solid green' : 'none'}} className = " btn-warning p-4 display-4 ml-5" onClick = {()=>{
                           this.props.datCuocTaiXiu(false)
                       }}>Xỉu</button>
                   </div>
               </div>
            </div>
        )
    }
}
const mapStateTopProps = (state) => {
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac,
        banChon: state.stateGameXucXac.banChon,

    }
}

// Tạo ra props đưa dữ liệu lên redux store 
const mapDispatchToProps = (dispatch) => {
    return {
        datCuocTaiXiu: (ketQuaChon) => {
            console.log(ketQuaChon);
            const action = {
                type: 'DAT_CUOC_TAI_XIU', //type này phải khác tên với các type nghiệp vụ khác
                ketQuaChon
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(XucXac)