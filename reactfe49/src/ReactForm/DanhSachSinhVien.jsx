import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'

export default class DanhSachSinhVien extends Component {
    render() {
        return (
            <div className = "container-fluid">
                <FormSinhVien/>
                <div className = "container">
                <table class="table bg-dark text-white">
                    <thead>
                        <tr>
                            <th>Mã Sinh Viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row"></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                
            </div>
        )
    }
}
const mapS