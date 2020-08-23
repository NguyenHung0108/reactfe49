import React, { Component } from 'react'

export default class RenderWithState extends Component {
        //quản lý những thay đổi trên giao diện
        state= {
            isLogin : false,

        } 


    // //Thuộc tính
    // isLogin= false;
    userName= "Tư ";

    renderLogin = () => {
        if (this.state.isLogin) {
        return <p>Hello {this.userName}</p>
        }
        return <div>
            <button className='btn btn-success' onClick = {()=> {this.handleLogin()}}>Đăng Nhập</button>
        </div>
    }
    
    handleLogin = () => {
        this.state.isLogin = true;
        //Phương thức set state
        //=>Làm thay đổi giá trị state
        //Gọi làm hàm render chạy lại
        //setState là 1 phương thức bất đồng bộ
        let newState = {isLogin:true};
        this.setState(newState,()=> {console.log(this.state.isLogin)});
        
    }







    render() {
        return (
            <div>
               {this.renderLogin()}
            </div>
        )
    }
}
