import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import { Menu, 
  Button 
} from 'antd';

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { SubMenu } = Menu;
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/about",
    main: () => <About />
  },
  {
    path: "/shop",
    main: () => <Shop />
  }
];
class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ width: 256 }}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
            <Link to="/shop">Shop</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5"><Link to="/about">About</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/shop">Shop</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
