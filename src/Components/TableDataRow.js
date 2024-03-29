import React, { Component } from 'react'

export default class TableDataRow extends Component {
    deleteButtonClick=(idUser) => {
        this.props.deleteButtonClick(idUser)
    }
    permissionShow=()=>{
        if (parseInt(this.props.permission) === 1){
            return "Admin"
        } else if (parseInt(this.props.permission) === 2){
            return "Moderator"
        }else{return "Normal User"}
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus()
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={() => {this.editClick()}} className="btn btn-warning sua"><i className="fa fa-edit" /> Sửa</div>
                        <div onClick={(idUser) => {this.deleteButtonClick(this.props.id)}} className="btn btn-danger xoa"><i className="fa fa-user-times" /> Xóa</div>
                    </div>
                </td>
            </tr>
        )
    }
}
