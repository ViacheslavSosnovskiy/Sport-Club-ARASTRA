import { Route, Redirect } from 'react-router-dom';

export default function PablicRoute({children, restricted = false, redirectTo='/', ...routeProps})