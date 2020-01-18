import { IRoutes } from 'src/declares/components'

export interface IMenuItem extends IRoutes {
    name: string;
    icon?: string;
    children?: IMenuItem[];
}

export const menuData: IMenuItem[] = [
    {
        name: '首页',
        path: '/'
    },
    {
        name: '登录页',
        path: '/login'
    }
]
