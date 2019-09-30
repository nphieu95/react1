import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props){
        super(props);
        this.state={
            trangThaiChinhSua:false
        }
    }
    thayDoiTrangThai=()=>{
        this.setState({
            trangThaiChinhSua: !this.state.trangThaiChinhSua
        })
    }
    hienThiNut=()=>{
        if(this.state.trangThaiChinhSua===true){
            return <div onClick={()=>this.thayDoiTrangThai()} className="btn btn-block btn-outline-danger"> Đóng lại </div>;
        }
        else{
            return <div onClick={() => this.thayDoiTrangThai()} className="btn btn-block btn-outline-info"> Thêm mới </div>;
        }
    }
    hienThiForm=()=>{
        if (this.state.trangThaiChinhSua === true) {
            return (
                <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Thêm mới User vào hệ thống</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select">
                                <option value={1}>Chọn quyền mặc định</option>
                                <option value={2}>Admin</option>
                                <option value={3}>Moderator</option>
                                <option value={4}>Normal</option>
                                {/* <option value=""></option> */}
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-primary btn-block">
                                Thêm mới
                            </div>
                        </div>
                        <p />
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="col-3">    
                {this.hienThiNut()}            
                {this.hienThiForm()}
            </div>
        )
    }
}
