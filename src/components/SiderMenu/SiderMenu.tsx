import React, { ReactComponentElement, ReactElement } from 'react';
import { menuData, IMenuItem } from '../../router/menu';
import { connect } from 'dva';
import { Menu, Icon } from 'antd';
import { jump } from '../../utlis/utlis';
import siderMenuStyles from './siderMenu.less';
import { VisibleModelType } from '@/models/siderVisibility';

const MenuItem = Menu.Item;
const { SubMenu } = Menu;
//default icon mode ;if I have time, I would change it 
export interface IChildren {
    name: string;
    childrenNum: number;
}
export interface ISmProps {
    siderVisibility:boolean;
    keys:number;
}
type childrenPath = {path:string};
type childrenName = {name:string};

//容器，存放path、name，用于组件
let path:string[] = [];
let name:string[] = [];
let childrenPath:string[] = [];
let childrenName:string[] = [];
let retPath:string[][] = [];
let retName:string[][] = [];

function divide(menuItem:IMenuItem[], pathArray:string[], nameArray:string[]) {
    return menuItem.map(item => {
        pathArray.push(item.path);
        nameArray.push(item.name);
        if (item.children) {
            //艹，回来重写一遍
            //hasChildren.push({name: item.name, childrenNum: item.children.length});
            childrenDivide(item.children, retPath,retName)
        } else {
            //noChildren.push({name: item.name, childrenNum: 0});
        }

    })
}

function childrenDivide(children:IMenuItem[], retPath:string[][], retName:string[][]) {
    let leng:number = children.length;
    childrenPath = [];
    childrenName = [];
    for(let i:number = 0; i < leng; i++) {
        childrenPath.push(children[i].path);
        childrenName.push(children[i].name);
    }
    retPath.push(childrenPath);
    retName.push(childrenName);
    return {
        retPath,
        retName
    }
}

function getMenuData() {
    return divide(menuData, path, name);
}

//返回多个MenuItem
//沃日，吐槽下这里，span标签被覆盖成opacity:0了，得手动加个style覆盖，虽然我也不知道为什么，这也太坑了
function retMenuItem(length:number, path:string[], name:string[]) {
    let res:JSX.Element[] = [];
    //let thisPath = path[0];
    for(let i:number = 0; i < length; i++) {
        if (!menuData[i].children){
            res.push(
                <MenuItem key={i+1} onClick={() => {jump(menuData[i].path)}}>
                    <Icon type="pie-chart" />
                    <span style={{opacity:1}}>&nbsp;&nbsp;&nbsp;{menuData[i].name}</span>
                </MenuItem>
            );
        }
        
    }
    return res;
}

function retSubMenu(length:number) {
    let subres:JSX.Element[] = [];
    let j:number = 0;
    for(let i:number = 0; i < length; i++) {
        if (menuData[i].children){
            j++;
            let keyValue:string = `sub${j}`
            let leng = retPath[j-1].length;
            subres.push(
                //onClick方法感觉怪怪的，以后测试下
                <SubMenu
                    key={keyValue}
                    title={
                        <span>
                            <Icon type="pie-chart" />
                            <span>{menuData[i].name}</span>
                        </span>
                    }
                >
                    {retMenuItem(leng, retPath[j-1], retName[j-1])}
                </SubMenu>
            );
        }
        
    }
    return subres;
}

//我曹，死在这个func xxx({props}:interface) {}写法上了
function SiderMenu({siderVisibility,keys}:ISmProps) {
    return (
        <div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode='inline'
                inlineCollapsed={siderVisibility}
                className={siderMenuStyles.main}
            >
                {retMenuItem(keys, path, name)}
                {retSubMenu(keys)}
            </Menu>
        </div>
    )
}

const SiderLayout: React.FC<any> = (siderVisibility:boolean) => {
    getMenuData();
    let keys = menuData.length;
    
    return (
        <div>
            <SiderMenu
                siderVisibility={siderVisibility}
                keys={keys}
            ></SiderMenu>
        </div>
    )
}

export default connect(({ state }:VisibleModelType) => ({
    siderVisibility: state.visible
}))(SiderLayout)

// Merry X's Mas