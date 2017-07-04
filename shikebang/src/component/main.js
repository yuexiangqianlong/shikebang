import React, {
	Component
} from 'react';
import {
	BrowserRouter,
	Router,
	Route,
} from 'react-router-dom';
import Storage from '../common/Storage'
import logo from '../logo.svg';
import Ajax from '../utility/ajax1';
import Config from '../utility/config';
import '../App.css';
import {
	Form,
	Input,
	Button,
	Checkbox,
	Icon,
	Layout
} from 'antd';
import 'antd/dist/antd.css';
import Head from "./head"
import Admin from "../admin/admin"
const FormItem = Form.Item;
const {
	Header,
	Footer,
	Sider,
	Content,
	value
} = Layout;

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class Main extends Component {
	constructor(props, context) {
		super(props, context); // 这样才行，如果只写props, 会把context 弄丢，所以super时始终建议这么写
		this.context.router;
		this.state = {}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				//===================================================
				Ajax(Config.server + 'shop/aa', 'POST', {
						userName: values.userName,
						password: values.password
					}).then((data) => {
						alert(data);
						console.log(data);
						let arr = data
						let index = Storage.getInstance().getProp('index');
						if (arr.role == 0) {
							index.setState({
								body: <Admin shopname={arr.nicheng} shoprole={arr.role}/>
							});
						} else {
							alert("服务端出错！");
						}
					})
					//====================================================
			}
		});
	}
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div className="App">
    <Content style={{ textAlign: "center",height:400,marginTop:100}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} style={{width: 200}} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} style={{width: 200}} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
           登录
          </Button>
          Or <a href="">现在注册!</a>
        </FormItem>
      </Form>
      </Content>
      </div>
		);
	}
}
Main = Form.create()(Main);

export default Main;