import * as React from 'react';
import { Menu, Icon, Drawer, Button } from 'antd';
import lsbStyles from './leftsideBar.css';
import Link from 'umi/link';
//Todo:将button移到外面，传入props来修改collapse状态|后期改为redux或者dva修改collapse状态
const { SubMenu } = Menu;

const leftsideBar : React.FC<{}> = () => {

    const [Visibility, setVisibility] = React.useState(false);

    return (
        <div className={lsbStyles.fullWeight}>
            <Button type='primary' onClick={() => setVisibility(!Visibility)} className={lsbStyles.showButton}>
                <Icon type='menu' />
            </Button>
            <Drawer
                title='导航'
                placement='left'
                closable={false}
                onClose={() => setVisibility(!Visibility)}
                visible={Visibility}
            >
                <Menu
                    defaultOpenKeys={['1']}
                    defaultSelectedKeys={['sub1']}
                    mode='inline'
                >
                    <Menu.Item key='1'>
                        <Icon type='pie-chart' />
                        <span>test1</span>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Icon type='desktop' />
                        <span>test2</span>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <Icon type='inbox' />
                        <span>test3</span>
                    </Menu.Item>
                    <SubMenu
                        key='sub'
                        title={
                            <span>
                                <Icon type='mail' />
                                <span>subTest</span>
                            </span>
                        }
                    >
                        <Menu.Item key='5'>tt</Menu.Item>
                        <Menu.Item key='6'>tt</Menu.Item>
                    </SubMenu>
                </Menu>
            </Drawer>
            
        </div>
    );
};

export default leftsideBar;
