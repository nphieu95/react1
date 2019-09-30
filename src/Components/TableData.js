import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

export default class TableData extends Component {
    deleteButtonClick=(idUser) => {
        this.props.deleteButtonClick(idUser);
    }
    mappingDataUser = ()=> this.props.dataUserProps.map((value, key)=>(
        <TableDataRow deleteButtonClick={(idUser) => { this.deleteButtonClick(idUser)}} changeEditUserStatus={() => this.props.changeEditUserStatus()} editFunClick={(user) => {this.props.editFun(value)}} key={key} stt={key} id={value.id} userName={value.name} tel={value.tel} permission={value.permission}/>
    ))
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
            // Hết col 9
        )
    }
}
