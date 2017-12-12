import Login from '../component/Login';
import Home from '../component/Home';

// import Login from 'bundle-loader?lazy!../component/Login';
// import Home from 'bundle-loader?lazy!../component/Home';

const routes = [{
    path: '/',
    component: Home,
    routes: [
        {
            path: '/login',
            component: Login,
        },
    ]
}];

export default routes;

export function renderRouters() {
    let res = buildRouters(routes);
    return res;
}

/*展开所有路由*/
function buildRouters(routes, parentRoute) {
    let routesArr = [];
    routes.map((route, i) => {
        if (parentRoute != null && parentRoute.path != '/') {
            route.path = parentRoute.path + route.path;
        }
        if (route.component)
            routesArr.push(route)
        if (route.routes)
            routesArr = [...routesArr, ...buildRouters(route.routes, route)]
    });
    return routesArr;
}