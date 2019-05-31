import React from "react";
import "./App.less";
import { Layout, Menu, Icon, Row, Col } from "antd";
import NavgationBar from "layouts/navigationBar/navigationBar";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

const cols = {
  sales: {
    tickInterval: 20
  }
};

class App extends React.Component {
  state = {
    collapsed: false,
    current: "sub0-0"
  };

  sideBar = [
    {
      title: "首页",
      icon: "home",
      SubMenu: [
        {
          title: "首页"
        }
      ]
    },
    {
      title: "数据统计管理",
      icon: "global",
      SubMenu: [
        {
          title: "上网行为查询"
        },
        {
          title: "用户流量统计"
        },
        {
          title: "文件下载统计"
        },
        {
          title: "邮件敏感信息"
        },
        {
          title: "微博敏感信息"
        }
      ]
    }
  ];

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleClick = (e: any) => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Layout className="layout">
        {/* 侧边栏 */}
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
          >
            {this.sideBar.map((item, index) => {
              return (
                <SubMenu
                  key={`sub1-${index.toString()}`}
                  title={
                    <span>
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {item.SubMenu.map((subMenu, id) => {
                    return (
                      <Menu.Item
                        key={`sub${index.toString()}-${id.toString()}`}
                      >
                        {subMenu.title}
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            })}
          </Menu>
          <div
            className={[
              "triggerBox",
              this.state.collapsed ? "menu-fold" : ""
            ].join(" ")}
          >
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </div>
        </Sider>

        <Layout>
          {/* 导航栏 */}
          <Header style={{ background: "#fff", padding: "10px" }}>
            <NavgationBar />
          </Header>
          
          {/* 内容 */}
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          />
        </Layout>
      </Layout>
    );
  }
}

export default App;
