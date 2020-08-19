import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = () => {
        alert('Hello');
    }
    showInfo = (name) => {
        alert(`Tên: ${name}` );
    }
    render() {
        return (
            <div className = "container">
                {/*Cách 1: truyền callback function thông qua thuộc tính  */}
                <button onClick = {this.handleClick}>Click Me</button>
                {/* Không có dấu đóng mở ngoặc vì click rồi mới gọi hàm  */}
                <br></br>
                <button onClick = {this.showInfo.bind(this, "Tư Lù Bế Tắc")}>Click Tư Nè</button>

                {/* Cách 2: dùng arrow function  */}
                <button onClick = {() => alert("Huhu")}>Show Message</button>
                <br></br>
                <button onClick={() => {
                    this.showInfo('Trần Văn Tư Lù')
                }}>Show Infomation</button>

            </div>
        )
    }
}
