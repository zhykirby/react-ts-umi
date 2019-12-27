import * as React from 'react';
import loginStyles from './login.css';
import { Input, Button } from 'antd';
import router from 'umi/router';

const nBefore = (
    <div className={loginStyles.width50}>用户名</div>
)
const pwBefore = (
    <div className={loginStyles.width50}>密码</div>
)

function onLoading() {
    router.push('/backstage');
}

const loginBox: React.FC<{}> = () => {
    return (
        <div className={loginStyles.loginOutter}>
            <span>登录页面</span>
            <div className={loginStyles.inputBetween}>
                <Input addonBefore={nBefore} placeholder='请输入用户名' />
            </div>
            <div className={loginStyles.inputBetween}>
                <Input.Password addonBefore={pwBefore} placeholder='请输入密码' />
            </div>
            <div className={loginStyles.inputBetween}>
                <Button type='primary' onClick={() => onLoading()}>登录</Button>
            </div>
        </div>
    )
}

export default loginBox;