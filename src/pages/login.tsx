import React, { Component } from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import LoginBox from '../components/login/Login';
import styles from './index.css';

export default class login extends Component {
    render() {
        return (
            <div>
                <div className={styles.middleDivLogin}>
                    <LoginBox />
                </div>
                
                <Button 
                    type='primary'
                    onClick={() => { router.goBack(); }}
                >test</Button>
            </div>
        )
    }
}
