import React from 'react';
import { menuData, IMenuItem } from '../../router/menu';
import { connect } from 'dva';
import { Menu, Icon } from 'antd';

//default icon mode ;if I have time, I would change it 
export interface IMenu {
    icon?: string;
    path: string;
    name: string;
}

let path:string[] = [];
let name:string[] = [];
let children:string[] = [];
let childrenPath:string[] = [];
let childrenName:string[] = [];

function divide(menuItem:IMenuItem[]) {
    return menuItem.map(item => {
        path.push(item.path);
        name.push(item.name);
        if (item.children) {
            //这一段总觉得怪怪的
            children.push('hasChildren');
            divide(item.children)
        } else {
            children.push('noChildren');
        }

    })
}

//todo:ui补完
function SiderMenu(menuItem:IMenuItem[], siderVisibility:boolean) {
    return (
        <div>
            <Menu
                defaultSelectedKeys={['1']}
            >

            </Menu>
        </div>
    )
}

//todo:数据补完
const SiderLayout: React.FC<any> = (siderVisibility:boolean) => {
    return (
        //<SiderMenu
            //path={}
            //name={}
        ///>
    )
}

export default connect((siderVisibility:boolean) => ({
    siderVisibility
}))(SiderLayout)

// Merry X's Mas