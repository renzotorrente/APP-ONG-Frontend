import React from 'react'
import Home from '../screens/HomeScreen'
import Contact from '../screens/ContactScreen'
import AboutUs from '../screens/AboutUsScreen'
import Login from '../screens/LoginScreen'
import Register from '../screens/RegisterScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppRoutesProps } from './InterfaceRouter'
import DetailNewScreen from '../screens/DetailNewScreen'
import NewsListScreen from '../screens/NewsListScreen'
import TestimonialsScreen from '../screens/TestimonialsScreen'
import useCheckLogStatusHook from '../Slices/hooks/CheckLogStatusHook'
import { ActivityDetailScreen } from '../screens/ActivityDetailScreen'
import TestimonialsForm from '../components/TestimonialsForm/TestimonialsForm'
import { PoseGroup } from 'react-pose'
import { RouteContainer } from './transitionConfig/transition'
import BackofficeRoutes from './BackofficeRoutes'
import OnlyAdminRoute from './protectedRoutes/OnlyAdminRoute/OnlyAdminRoute'
import OnlyLoggedOutRoute from './protectedRoutes/OnlyLoggedOutRoute/OnlyLoggedOutRoute'
import ActivityListScreen from '../screens/ActivityListScreen'
import ContributeScreen from '../screens/ContributeScreen'
import IndexNavBar from '../components/NavBar/IndexNavBar'
import BOEditUserScreen from '../screens/BOEditUserScreen'

function AppRoutes({ children }: AppRoutesProps): JSX.Element {
  useCheckLogStatusHook()
  return (
    <Router>
      <IndexNavBar>
        <Route
          render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={AboutUs} />
                  <OnlyLoggedOutRoute exact path="/login">
                    <Login />
                  </OnlyLoggedOutRoute>
                  <OnlyLoggedOutRoute exact path="/register">
                    <Register />
                  </OnlyLoggedOutRoute>
                  <Route
                    exact
                    path="/backoffice/edit/users/:id"
                    component={BOEditUserScreen}
                  />
                  <Route exact path="/contact" component={Contact} />
                  <Route
                    exact
                    path="/testimonies"
                    component={TestimonialsScreen}
                  />
                  <Route
                    exact
                    path="/activities"
                    component={ActivityListScreen}
                  />
                  <Route
                    exact
                    path="/contribute"
                    component={ContributeScreen}
                  />
                  <Route
                    exact
                    path="/testimonials/form"
                    component={TestimonialsForm}
                  />
                  <Route
                    exact
                    path="/novedad/:id"
                    component={DetailNewScreen}
                  />
                  <Route exact path="/novedades" component={NewsListScreen} />
                  <Route
                    exact
                    path="/actividades/:id"
                    component={ActivityDetailScreen}
                  />
                  <OnlyAdminRoute>
                    <BackofficeRoutes />
                  </OnlyAdminRoute>
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )}
        />
        {children}
      </IndexNavBar>
    </Router>
  )
}
export default AppRoutes
