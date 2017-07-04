import React, {
  Component
} from 'react';
import logo from '../logo.svg';
import Ajax from '../utility/ajax1';
import Config from '../utility/config';
import '../App.css';
import {
  Layout
} from 'antd';
import 'antd/dist/antd.css';
import Head from "../component/head"
import AdminMain from './daminMain'
const {
  Header,
  Footer,
  Sider,
  Content,
  value
} = Layout;
class Admin extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.state.body = <AdminMain/>;
  }
  render() {
    return (
      <div className="App">
      <Layout >
      <Content>
      {this.state.body}
      </Content>
     </Layout>
      </div>
    );
  }
}
export default Admin;