import React, {
	Component
} from 'react';
import logo from '../logo.svg';
import Main from "./main"
import Ajax from '../utility/ajax';
import Config from '../utility/config';
import Storage from '../common/Storage'
import {
	Link
} from "react-router-dom"
import {
	Layout,
	Input,
	Button,
	Tooltip
} from 'antd';
const {
	Header,
	Sider,
	Content
} = Layout;
const text = <span>prompt text</span>;
class Head extends Component {
	constructor(props, context) {
		super(props, context); // 这样才行，如果只写props, 会把context 弄丢，所以super时始终建议这么写
		this.state = {}
	}
	async logout() {
		let response = await fetch(Config.server + 'shop/logout');
		if (response.ok) {
			let text = await response.text();
			console.log(text);
			if (text == 1) {
				let index = Storage.getInstance().getProp('index');
				index.setState({
					body: <Main/>
				});
			}
		}

	}
	render() {
		return (
			<Header style ={{background:"#108ee9"}}>
		        <Sider style ={{background:"#108ee9",height:50}}>
		        <img src={logo} className="App-logo" alt="logo"/>
		        </Sider>
		        <Content style ={{background:"#108ee9",marginTop:-50,marginLeft:30}} >
		         <div className="example-input" style ={{color:'#fff',fontSize:20,}}>
		        <Input size="large" placeholder="large size" style={{width: 400}}/>
		          <Button type="primary" icon="search" >Search</Button>
		          </div>
		        </Content>   
				<Sider style ={{background:"#108ee9",height:50,marginLeft:1100,marginTop:-60,}}> 
				<Link to='/'><Button type="primary" icon="logout" onClick={(e)=> this.logout(e)} >注销</Button></Link>
		         </Sider>
    </Header>
		)
	}

}
Head.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default Head;