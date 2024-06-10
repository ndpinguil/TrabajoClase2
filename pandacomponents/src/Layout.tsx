// src/Layout.tsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = ({ children }) => {
return (
    <Layout>
    <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/components">Components</Link>
            </Menu.Item>
        </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        {children}
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Kung Fu Panda ©2024 Created by ChatGPT</Footer>
    </Layout>
    );
};

export default AppLayout;
