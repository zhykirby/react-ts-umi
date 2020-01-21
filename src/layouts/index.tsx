import React, { ReactNode } from 'react';
import styles from './index.css';
import BackStage from './backstage';
//Todo:添加scrollToTop
//import withRouter from 'umi/withRouter';

const BasicLayout: React.FC = props => {

  /**
   * useEffect(() => {
   *    window.scrollTo(0, 0); 
   * }, [props.location])
   */
  if (props.location.pathname === '/backstage') {
    return <BackStage>{props.children}</BackStage>
  }
  
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>阴天的测试项目</h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;
// export default withRouter(BasicLayout)
