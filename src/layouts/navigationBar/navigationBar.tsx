import React from "react";
import "./navigationBar.less";
import { Menu, Dropdown, Icon } from "antd";

// 下拉框
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        个人中心
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        修改密码
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);

class NavgationBar extends React.Component {
  public userName = "超级管理员";

  render() {
    return (
      <Dropdown className="usename" overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          {this.userName} <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

export default NavgationBar;
