import React, { Component } from 'react'

export default class AddUserKhacCoponents extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value
        });
        var item={};
        item.id=this.state.id;
        item.name=this.state.name;
        item.tel=this.state.tel;
        item.permission = this.state.permission;
        // item.permission = parseInt(this.state.permission, 20);
        // console.log(item);
    }
    kiemTraTrangThai=()=>{
        if(this.props.hienThiForm===true){
            return(
                <div className="col">
                    <form>
                    <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">Thêm mới User vào hệ thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tên user" name="name" onChange={(event) => {this.isChange(event)}} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Điện thoại" name="tel" onChange={(event) => { this.isChange(event) }} />
                            </div>
                            <div className="form-group">
                                <select className="custom-select" name="permission" onChange={(event) => { this.isChange(event) }}>
                                    <option value={0}>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                    {/* <option value=""></option> */}
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" onClick={(name, tel, permission) => { this.props.add(this.state.name, this.state.tel, this.state.permission) }} className="btn btn-primary btn-block" value=" Thêm mới" ></input>
                            </div>
                            <p />
                        </div>
                    </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        // console.log(this.state);
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>

        )
    }
}
