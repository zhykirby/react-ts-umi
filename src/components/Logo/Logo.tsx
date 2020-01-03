import * as React from 'react';
import { connect } from 'dva';
import { IVisible } from '../../declares/components';
import { VisibleModelType } from '@/models/siderVisibility';

//todo:UI补全
function LogoUI(siderVisibility:IVisible) {
    if (siderVisibility) {
        return (
            <div>
                
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}

//dva
const Logo: React.FC<any> = (siderVisibility:boolean) => {
    return (
        <LogoUI siderVisibility={siderVisibility} />
    )
}

export default connect(({ state }:VisibleModelType) => ({
    siderVisibility: state.visible
}))(Logo);
