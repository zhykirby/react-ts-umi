//backstage layout siderMenu的visibility
export default {
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
    }
}