import { History } from 'history';
import { stringify } from 'qs';

import { setAuthority, getAuthority, AuthorityType } from '../utlis/authority';
import { reloadAuthorized } from '../utlis/Authorized';

export function doLogout(history: History<any>) {
    //获取当前状态
    const currentAuthority =getAuthority();
    if (currentAuthority !== AuthorityType.guest) {
        //修改为游客，登出账号
        setAuthority(AuthorityType.guest);
        //重新渲染
        reloadAuthorized();
        history.push({
            pathname: '/login',
            search: stringify({
                redirect: window.location.href
            })
        })
    }
}