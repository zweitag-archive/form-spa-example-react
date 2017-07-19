import routes from './routes';

export default function page(state = 'Welcome', action) {
    if (Object.hasOwnProperty.call(routes, action.type)) {
        return routes[action.type].component;
    }
    return state;
}
