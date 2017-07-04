import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router-dom'
import logo from '../logo.svg';
import Ajax from '../utility/ajax1';
import Config from '../utility/config';
import '../App.css';
import Admin from './admin';
import HomeApplyList from './HomeApplyList'
import AdminLeft from './adminLeft'
import {
	Form,
	Input,
	Button,
	Checkbox,
	Icon,
	Layout
} from 'antd';
import 'antd/dist/antd.css';
import Head from "../component/head"
const {
	Content,
	Header,
	Sider,
	Footer
} = Layout;

class AdminMain extends Component {
	render() {
		return (
			<Layout >
       <Content>
      <Layout>
      <Sider style={{height:300,}}>
		<AdminLeft/>
		 </Sider>
        <Content style={{height:500}}>Content</Content>
      </Layout>  
       </Content>
     </Layout>
		);
	}
}
export default AdminMain;