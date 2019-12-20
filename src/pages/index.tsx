import * as React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import LeftsideBar from '../components/leftsideBar/leftsideBar';
import { Button } from 'antd';

interface IState {
  collapsed: boolean;
}

export default class index extends React.Component<{}, IState> {
  
  public state = {
      collapsed: false
  }
  
  render() {
    return (
      <div className={styles.normal}>
        <LeftsideBar />
        <Link to='/login'>go to login</Link>
      </div>
    );
  }
}
