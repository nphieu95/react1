import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            temValue:"",
            userObj:{}
        }
    }
    getUserEditinfo=(info) => {
        this.setState({
            userObj:info
        });
        this.props.getUserEditinfoApp(info);
    }
    hienTHiNut=() =>{
        if(this.props.hienThiForm===true){
            return (
                <div className="btn btn-outline-danger" onClick={this.props.ketNoi}> Đóng lại </div>
            )
        }else{
            return(
                <div className="btn btn-outline-info" onClick={this.props.ketNoi}> Thêm mới </div>
            )
        }
    }
    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return <EditUser getUserEditinfo={(info) => { this.getUserEditinfo(info)}} userEditObject={this.props.userEditObject} changeEditUserStatus={() => this.props.changeEditUserStatus()}/>
        }
    }
    isChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            temValue:event.target.value
        })
        this.props.checkConnectProps(this.state.temValue)
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="form-group">
                    <div className="btn-group" style={{ width: '55%' }}>
                        <input type="text" className="form-control" placeholder="Nhập tên cần tìm" onChange={(event)=>this.isChange(event)}/>
                        <div className="btn btn-info" onClick={(dl)=> this.props.checkConnectProps(this.state.temValue)}>Tìm</div>
                    </div>
                    <div className="btn-group ml-2">
                        {this.hienTHiNut()}
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
