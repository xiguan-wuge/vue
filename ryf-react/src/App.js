import React, { Component } from 'react';
// 对react ui 阿里的antd 部分引用 
import { Table, Pagination, Input, Row, Button, Modal, Form } from 'antd';
import 'antd/dist/antd.css'
import './App.css';
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;

class App extends Component {
  modal(type,row) {
    // console.log(item)

    this.setState({
      visible: true
    }, () => {
      this.props.form.resetFields();//reset
      console.log(row)
      if (type === 'add') return;     
        this.props.form.setFieldsValue({
          username: row.username,
          age: row.age,
          address: row.address
        })
      
    })
  }
  handleOK() {
    this.props.form.validateFieldsAndScroll((err, values) => {
      // 是否符合规则的处理 报错，通过验证，提交表单
      if (!err) {
        this.setState({
          visible: false
        })
      }

    })
    // this.setState({
    //   visible: false
    // })
  }
  remove(row) {
    // 若用箭头函数，则不用这样。、
    const that = this;
    confirm({
      title: '是否删除该用户',
      okText: '是',
      cancelText: '否',
      onOk() {
        const _users = that.state.users.filter(data => {
          return data.id !== row.id
        });
        that.setState({
          users:_users
        })
      }

    })
  }
  state = {
    visible: false,
    users: [{
      username: 'zk',
      age: 18,
      address: '杭州',
      id: 1
    }, {
        username: 'nf',
        age: 28,
        address: '苏州',
        id: 2
      },{
        username: 'bjy',
        age: 28,
        address: '扬州',
        id: 3
      }]
  }
  columns = [{
    dataIndex:'username',
    title:"用户",
  },{
    dataIndex: 'age',
    title: "年龄",
    }, {
      dataIndex: 'address',
      title: "地址",
    }, {
      dataIndex:'action',
      title:'操作',
      width:200,
      render:(Text,row) => {
        return (
          <div>
            <Button type="primary" onClick={() => {this.modal('edit',row)}}>编辑</Button>
            <Button type="danger" style={{marginLeft:10}} onClick={() => this.remove(row)}>删除</Button>
          </div>
        )
      }
    }]
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    return (
      <div className="App">
        {/* 布局组件 */}
        <Row>
          <Search style={{ width: 300 }} />
          {/* 箭头函数 this指向modal */}
          <Button type="primary" style={{ marginLeft: 20 }} onClick={() => this.modal('add')}>添加用户</Button>
        </Row>
        <Row style={{ paddingTop: 20 }}>
          <Table dataSource={this.state.users} columns={this.columns} rowKey={row => row.id} bordered pagination={false}/>
        </Row>
        {/* Modal 会脱离文档流 */}
        <Modal title="添加用户" visible={this.state.visible} onCancel={() => this.setState({ visible: false })}
          onOk={() => this.handleOK()}>
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  rules: [
                    { required: true, message: 'Please input your username' }
                  ]
                })(<Input placeholder="Username" />)
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  rules: [
                    { required: true, message: 'please input your age' }
                  ]
                })(<Input placeholder="Age" />)
              }
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  rules: [
                    { required: true, message: 'please input your address' }
                  ]
                })(<Input placeholder="Address" />)
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(App);
