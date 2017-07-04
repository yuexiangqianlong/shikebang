import React, {
  Component
} from 'react';
import {
  Router,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Storage from './common/Storage'
import {
  Link
} from 'react-router'
import logo from './logo.svg';
import Ajax from './utility/ajax1';
import Config from './utility/config';
import './App.css';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Icon,
  Layout
} from 'antd';
import 'antd/dist/antd.css';
import Head from "./component/head"
import Main from "./component/main"
const FormItem = Form.Item;
const {
  Header,
  Footer,
  Sider,
  Content,
  value
} = Layout;
class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
    Storage.getInstance().setProp('index', this);
    this.state.body = <Main/>;
  }
  render() {
    return (
      <div className="App">
      <Layout >
      <Head/>
     {this.state.body}
     <Footer>a</Footer>
     </Layout>
      </div>
    );
  }
}
App = Form.create()(App);


export default App;