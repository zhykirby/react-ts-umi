import { IRoutes } from 'src/declares/components';

export interface IBreadcrumb extends IRoutes {
    breadcrumbName: string;
    children?: IBreadcrumb[];
}

//test
const routes:IBreadcrumb[] = [
    {
        path: 'test',
        breadcrumbName: 'test',
        children: [
            {
                path: '/test',
                breadcrumbName: 'test-test'
            }
        ]
    }
]

export default routes;