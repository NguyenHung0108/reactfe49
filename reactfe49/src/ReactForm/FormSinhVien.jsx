import React, { Component } from 'react';
import {connect} from 'react-redux'

 class FormSinhVien extends Component {
    state = {
        values: {
            maSV: "",
            tenSV: "",
            sdt: "",
            email: "",
        },
        errors: {
            maSV: "",
            tenSV: "",
            sdt: "",
            email: "",
        }

    }
    handleChangeInput = (event) => {
        let { value, name } = event.target;
        let newValues = { ...this.state.values, [name]: value }
        let newErrors = { ...this.state.errors, [name]: value.trim() === '' ? `${name} không được bỏ trống` : '' }
        let type = event.target.getAttribute('type_');
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (type === "email") {
            if (!regexEmail.test(value)) {
                newErrors[name] = "Email không hợp lệ !";
            }
        }
        // newValues = {
        //     ...newValues,
        //     [name]: value
        // }
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
        });
    }
    handleSubmit = (event) => {
        event.preventDefault(); //Chặn sự kiện submit của trình duyệt

        //validation
        let valid = true;
        for (let key in this.state.values) {
            if (this.state.values[key].trim() ===""){
                valid = false;
            }
        }
        for (let key in this.state.errors) {
            if (this.state.errors[key].trim() !=="") {
                valid = false;
            }
        }
        if (!valid) {
            alert('Dữ liệu không hợp lệ !')
        }
        const action = {
            type: 'THEM_SINH_VIEN',
            sinhVien: this.state.values
        }
        this.props.dispatch(action)

    }
    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleSubmit}>
                <div className="card text-left">
                    <div className="card-header display-4 font-weight-bold text-white bg-dark text-center">THÔNG TIN SINH VIÊN</div>
                    <div className="card-body row">
                        <div className="form-group col-6">
                            <p>Mã sinh viên</p>
                            <input type="text" name="maSV" className="form-control" onChange={this.handleChangeInput} />
                            <p className="text-danger">{this.state.errors.maSV}</p>
                        </div>
                        <div className="form-group col-6">
                            <p>Email</p>
                            <input type_="email" name="email" className="form-control" onChange={this.handleChangeInput} />
                            <p className="text-danger">{this.state.errors.email}</p>
                        </div>
                    </div>
                    <div className="card-body row">
                        <div className="form-group col-6">
                            <p>Tên sinh viên</p>
                            <input type="text" name="tenSV" className="form-control" onChange={this.handleChangeInput} />
                            <p className="text-danger">{this.state.errors.tenSV}</p>
                        </div>
                        <div className="form-group col-6">
                            <p>Số điện thoại</p>
                            <input type="text" name="sdt" className="form-control" onChange={this.handleChangeInput} />
                            <p className="text-danger">{this.state.errors.sdt}</p>
                        </div>
                    </div>
                    <div className="row container ">
                        <div className="col-12 text-right">
                            <button type="submit" className="btn btn-success text-right"> Thêm sinh viên</button>
                        </div>
                        <div className="col-12 text-right">
                            <button type="submit" className="btn btn-primary text-right"> Chỉnh sửa</button>
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}

export default connect (null) (FormSinhVien)
