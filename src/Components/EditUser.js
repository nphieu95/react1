import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
            
        }
    }
    saveButton=() => {
        var info={};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditinfo(info)
        this.props.changeEditUserStatus();

    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className="col-12">
                <form>
                    <div className="card border-warning mb-3 mt-2">
                        <div className="card-header text-center">Sửa thông tin User trong hệ thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={(event) => {this.isChange(event)}} defaultValue={this.props.userEditObject.name} type="text" className="form-control" placeholder="Tên user" name="name" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => { this.isChange(event) }} defaultValue={this.props.userEditObject.tel} type="text" className="form-control" placeholder="Điện thoại" name="tel" />
                            </div>
                            <div  className="form-group">
                                <select onChange={(event) => { this.isChange(event) }} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission">
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                    {/* <option value=""></option> */}
                                </select>
                            </div>
                            <div className="form-group">
                                <input onClick={() => { this.saveButton()}} className="btn btn-primary btn-block" defaultValue=" Lưu" ></input>
                            </div>
                            <p />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
