export interface IMenuItem {
    path: string;
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
