import * as React from 'react';
import SiderMenu from '../components/SiderMenu/SiderMenu';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import BackStyles from './backstage.css';

const Backstage: React.FC = props => {
    return (
        <div className={BackStyles.main}>
            <div className={BackStyles.left}>
                <SiderMenu />
            </div>
            <div className={BackStyles.right}>
                {props.children}
            </div>
        </div>
    )
}

//export default withRouter(connect()(Backstage));
export default Backstage;