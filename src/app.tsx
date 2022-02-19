/** Umi 运行时配置 */
import * as React from 'react';
import { IRouteProps, IRouteComponentProps, Location } from 'umi';

import RootContainer from './RootContainer';

/**
 * 修改路由
 */
export function patchRoutes({ routes }: { routes: IRouteProps }) {
  routes.unshift({
    path: '/foo',
    exact: true,
    component: require('@/pages/index').default,
  });
}

/**
 * 覆写 render。比如用于渲染之前做权限校验
 * @param oldRender
 */
export function render(oldRender: any) {
  // fetch('/api/auth').then(auth => {
  //   if (auth.isLogin) { oldRender() }
  //   else {
  //     history.push('/login');
  oldRender();
  //   }
  // });
}

/**
 * 在初始加载和路由切换时做一些事情
 */
export function onRouteChange({
  routes,
  matchedRoutes,
  location,
  action,
}: {
  routes: IRouteProps[];
  matchedRoutes: IRouteComponentProps;
  location: Location;
  action: string;
}) {
  console.log(routes, matchedRoutes, location, action);
}

/**
 * 修改交给 react-dom 渲染时的根组件
 * @param container
 * @returns
 */
export function rootContainer(container: React.ReactNode) {
  return React.createElement(RootContainer, null, container);
}
