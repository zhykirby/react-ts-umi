import * as React from 'react';
import { Button } from 'antd';
import Logo from '../Logo/Logo';
import { connect } from 'dva';
import { VisibleModelType } from '@/models/siderVisibility';
import { Dispatch, AnyAction } from 'redux';

export interface IConnect {
    visible: boolean;
    dispatch: Dispatch<AnyAction>;
}

function changeVisibility(dispatch:Dispatch<AnyAction>) {
    dispatch({
        type: 'siderVisibility/change'
    });
}

//UI部分
const HeaderUI: React.FC<any> = ({visible, dispatch}:IConnect) => {
    return (
        <div>
            <Button type='default' icon='menu-fold' onClick={() => changeVisibility(dispatch)} />
        </div>
    )
}

connect((siderVisibility:VisibleModelType) => ({
    siderVisibility: siderVisibility,
    visible: siderVisibility.state.visible
}))(HeaderUI);

//mapdispatchtoprops 不将dispatch作为属性传入，作为方法从connect获得
//todo:修改dispatch的获得方法
const PageHeader: React.FC<any> = ({visible, dispatch}:IConnect) => {
    return (
        <div>
            <Logo />
            <HeaderUI />
        </div>
    )
}

export default PageHeader;

