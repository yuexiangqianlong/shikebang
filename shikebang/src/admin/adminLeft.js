import React, {
	Component
} from 'react';
import {
	Link
} from "react-router-dom"

import {
	postHttp
} from "../utility/HttpBean"
import {
	Layout
} from 'antd';
import 'antd/dist/antd.css';
const {
	Sider,
	Content,
	Header,
	Footer,
	value
} = Layout;

class AdminList extends Component {
	constructor(props, context) {
		super(props, context);
	}
	async HomeApplyList() {
		let text = await postHttp('shop/userlist');
		console.log(text);
	}
	render() {
		return (
			<Sider style={{height:300,}}>
           <Header style={{marginTop:10}}><Link to="/HomeApplyList" onClick={(e)=> this.HomeApplyList(e)} >用户申请列表</Link></Header>
           <Content style={{marginTop:40}}>账户管理</Content>
           <Footer style={{marginTop:40}}>客户管理</Footer>
       </Sider>
		);
	}
}
export default AdminList;