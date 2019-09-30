import React, {Component} from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
//import AddUser from './AddUser';
import AddUserKhacCoponents from './AddUserKhacCoponents';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');

export default class App extends Component {
  // thongBao = () => {
  //   alert('Ket noi thanh cong');
  // }

  constructor(props){
    super(props);
    this.state={
      hienThiForm:false,
      data:[],
      searchText:"",
      editUserStatus:false,
      userEditObject:{}
    }
  }
  
  componentWillMount(){
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }

  }
  deleteUser=(idUser) => {
    //ham filter
    // var arr =[1, 2 , 3];
    // var x = 2;
    // arr=arr.filter(item => item !== x);
    // console.log(arr);
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data:tempData
    })
    // tempData.forEach((value, key)=>{
    localStorage.setItem('userData', JSON.stringify(tempData));
    // })
  }
  getUserEditinfoApp=(info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    })
  }
  doiTrangThai=()=>{
    this.setState({
      hienThiForm:!this.state.hienThiForm
    });
  }
  editUser = (user) => {
    this.setState({
      userEditObject:user
    })
  }
  getNewUserData = (name, tel, permission) => {
    var item = {};
    item.id = uuidv1();
    item.name=name;
    item.tel=tel;
    item.permission=permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    localStorage.setItem('userData', JSON.stringify(items));
  }
  getTextSearch=(dl)=>{
    this.setState({
      searchText:dl
    })
  }
  render() {
    var ketqua=[];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText)!== -1){
        ketqua.push(item);
      }
    })
    return (
      <div className="">
        <Header />
        <div className="serchForm">
          <div className="container">
            <div className="row">
              <Search getUserEditinfoApp={(info) => { this.getUserEditinfoApp(info)}} changeEditUserStatus={() => this.changeEditUserStatus()} userEditObject={this.state.userEditObject} editUserStatus={this.state.editUserStatus} ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm} checkConnectProps={(dl)=> this.getTextSearch(dl)} />
              <div className="col-12">
                <div className="row">
                  {/*editFun=this.editUser in App.js -> editFunClic=this.props.editFun in TableData -> */}
                  <TableData deleteButtonClick={(idUser) => {this.deleteUser(idUser)}} changeEditUserStatus={() => this.changeEditUserStatus()} editFun={(user) => {this.editUser(user)}} dataUserProps={ketqua} />
                  {/* <AddUser></AddUser> */}
                  <AddUserKhacCoponents add={(name, tel, permission) => { this.getNewUserData(name, tel, permission)}} hienThiForm={this.state.hienThiForm} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

