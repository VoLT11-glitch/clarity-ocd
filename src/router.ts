// Hash routes so the phone's back button, refresh and shared links all work
// without any server config on Vercel.
export type Route = 'home' | 'story' | 'check' | 'result' | 'pause';

const ROUTES: Route[] = ['home', 'story', 'check', 'result', 'pause'];

export function readRoute(): Route {
  const r = window.location.hash.replace(/^#\/?/, '') as Route;
  return ROUTES.includes(r) ? r : 'home';
}

export function go(route: Route) {
  window.location.hash = route === 'home' ? '/' : `/${route}`;
}
