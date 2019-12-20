//todo:有机会改成ts的吧
import * as React from 'react';
import Link from 'umi/link';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Breadcrumb, Badge, Icon } from 'antd';

//interface IArray {
//    path: string;
//    breadcrumb: React.ReactNode | string;
//}

//设置默认routes,如果传入为空，则自动使用默认routes
//改为使用defaultProps
const defaultRoutes= [{path: '/', breadcrumb: '首页'}, {path:'/login', breadcrumb: '登录'}];

const Breadcrumbs = ({ data }) => {
    if (data && Array.isArray(data)) {
      const AntdBreadcrumb = withBreadcrumbs(data)(({ breadcrumbs }) => {
        return (
          <Breadcrumb separator={<Icon type="double-right" />} classNames="spread">
            {breadcrumbs.map((breadcrumb, index) => (
              <Breadcrumb.Item key={breadcrumb.key}>
                {breadcrumbs.length - 1 === index ? (
                  <Badge status="processing" text={breadcrumb} />
                ) : (
                  <Link
                    to={{
                      pathname: breadcrumb.props.match.url,
                      state: breadcrumb.props.match.params ? breadcrumb.props.match.params : {},
                      query: breadcrumb.props.location.query ? breadcrumb.props.location.query : {},
                    }}
                  >
                    {breadcrumb}
                  </Link>
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        );
      });
      return <AntdBreadcrumb />;
    }
    const DefaultBreadcrumb = withBreadcrumbs(defaultRoutes)(({ breadcrumbs }) => (
      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={breadcrumb.key}>
            <Link
              to={{
                pathname: breadcrumb.props.match.url,
                state: breadcrumb.props.match.params ? breadcrumb.props.match.params : {},
                query: breadcrumb.props.location.query ? breadcrumb.props.location.query : {},
              }}
            >
              {breadcrumb}
            </Link>
            {index < breadcrumbs.length - 1 && <i> / </i>}
          </span>
        ))}
      </div>
    ));
    return <DefaultBreadcrumb />;
  };

//Breadcrumbs.defaultProps = {
//   routes: [{path: '/', breadcrumb: '首页'}]
//}

export default Breadcrumbs;