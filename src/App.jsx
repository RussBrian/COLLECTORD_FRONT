import './App.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { lazy, Suspense } from 'react';
import { Router } from './components/Router.jsx';
import { Route } from './components/Route.jsx';

const LazyLoginPage = lazy(() => import('./pages/Login.jsx'))
const LazyRegisterUserPage = lazy(() => import('./pages/RegisterUser.jsx'))
const LazyRegisterInstitutionPage = lazy(() => import('./pages/RegisterInstitution.jsx'))
const LazyDashboardPersonPage = lazy(() => import('./pages/PersonPage.jsx'))
const LazyForgotPasswordPage = lazy(() => import('./pages/ForgotPassword.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFOundPage.jsx'))

const appRoutes = [
  {
    path: '/',
    Component: LazyLoginPage,
  },
  {
    path: '/login',
    Component: LazyLoginPage,
  },
  {
    path: '/registerUser',
    Component: LazyRegisterUserPage,
  },
  {
    path: '/registerInstitution',
    Component: LazyRegisterInstitutionPage,
  },
  {
    path: '/personPage',
    Component: LazyDashboardPersonPage
  },
  {
    path: '/forgotPassword',
    Component: LazyForgotPasswordPage
  }
];

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div><strong>Cargando...</strong></div>}>
        <Router routes={appRoutes} defaultComponet={NotFoundPage}>
        <Route path='/' Component={LazyLoginPage}></Route>
          <Route path='/login' Component={LazyLoginPage}></Route>
          <Route path='/registerUser' Component={LazyRegisterUserPage}></Route>
          <Route path='/registerInstitution' Component={LazyRegisterInstitutionPage}></Route>
          <Route path='/personPage' Component={LazyDashboardPersonPage}></Route>
          <Route path='/forgotPassword' Component={LazyForgotPasswordPage}></Route>
        </Router>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
