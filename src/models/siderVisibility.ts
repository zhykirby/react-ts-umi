import { Reducer } from 'redux';
import { Effect } from 'dva';

export interface VisibleState {
    visible: boolean;
}

export interface VisibleModelType {
    namespace: string;
    state: VisibleState;
    reducers: {
        change: Reducer<VisibleState>;
    };
    effects: {
        fetch: Effect;
    }
}

const VisibleModel: VisibleModelType = {
    namespace: 'siderVisibility',
    state: {
        visible: true
    },
    reducers: {
        change(state:any) {
            return {
                ...state,
                visible: !state.visible
            }
        }
    },
    effects: {
        *fetch(_, { call, put}) {
            yield put({
                type: 'change'
            })
        }
    }
}

export default VisibleModel;