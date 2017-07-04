import React, {
  Component
} from 'react';
import {
  Link
} from "react-router-dom"
import {
  Table,
  Icon,
  Layout
} from 'antd';
import Head from "../component/head"
import 'antd/dist/antd.css';
import '../App.css';
import AdminLeft from './adminLeft'
const {
  Header,
  Footer,
  Sider,
  Content,
  value
} = Layout;
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];
const columns = [{
  title: '真实姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '申请时间',
  dataIndex: 'applytime',
  key: 'applytime',
}, {
  title: '身份证号',
  dataIndex: 'number',
  key: 'number',
}, {
  title: '照片',
  dataIndex: 'photo',
  key: 'photo',
}];
class HomeApplyList extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="App">
         <Head/>
              <Layout >
       <Content>
      <Layout>
      <Sider style={{height:300,}}>
    <AdminLeft/>
     </Sider>
        <Content style={{height:500}}><Table dataSource={dataSource} columns={columns} /></Content>
      </Layout>  
       </Content>
     </Layout>
    );
      </div>
    );
  }
}
export default HomeApplyList;