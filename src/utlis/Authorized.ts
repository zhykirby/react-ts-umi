import RenderAuthorized from '../components/Authorized';
import { getAuthority } from './authority';

let Authorized = RenderAuthorized(getAuthority());

//重新加载对应的组件
const reloadAuthorized = () => {
    Authorized = RenderAuthorized(getAuthority());
}

export { reloadAuthorized };
export default Authorized;