import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UsersList from '../components/UsersListComponent/UsersList'
import { EditOrganizationscreen } from '../screens/EditOrganizationscreen'
import BOActivitiesListScreen from '../screens/BOActivitiesScreen'
import NewsFormScreen from '../screens/NewsFormScreen'
import BackOfficeNewsListScreen from '../screens/BackOfficeNewListScreen'
import BOCategoriesScreen from '../screens/BOCategoriesScreen'
import { ListContactScreen } from '../components/listcontacts/ListContactScreen'
import { TestimonialsList } from '../components/TestimonialsListComponents/TestimonialsList'
import { CategoriesFormScreen } from '../screens/CategoriesFormScreen'
import BOEditUserScreen from '../screens/BOEditUserScreen'
import EditActivityScreen from '../screens/EditActivityScreen'
import CategoriesEditScreen from '../screens/CategoriesEditScreen'
import { CreateOrganizationscreen } from '../screens/createOrganizationScreen'
import BOCreateActivityScreen from '../screens/BOCreateActivityScreen'
import { EditHomeSlidersScreen } from '../screens/EditHomeSlidersScreen'
import { BODetailContactsScreen } from '../screens/BODetailContactsScreen'
const BackofficeRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/backoffice/home-edit">
        <EditHomeSlidersScreen />
      </Route>
      <Route exact path="/backoffice/users" component={UsersList} />
      <Route
        exact
        path="/backoffice/edit-organization"
        component={EditOrganizationscreen}
      />
      <Route
        exact
        path="/backoffice/create-organization"
        component={CreateOrganizationscreen}
      />
      <Route
        exact
        path="/backoffice/activities"
        component={BOActivitiesListScreen}
      />
      <Route
        exact
        path="/backoffice/activities/create"
        component={BOCreateActivityScreen}
      />
      <Route exact path="/backoffice/news/create" component={NewsFormScreen} />
      <Route exact path="/backoffice/news/:id" component={NewsFormScreen} />
      <Route
        exact
        path="/backoffice/news"
        component={BackOfficeNewsListScreen}
      />
      <Route
        exact
        path="/backoffice/categories"
        component={BOCategoriesScreen}
      />
      <Route
        exact
        path="/backoffice/categories/create"
        component={CategoriesFormScreen}
      />
      <Route exact path="/backoffice/contacts" component={ListContactScreen} />
      <Route
        exact
        path="/backoffice/testimonials"
        component={TestimonialsList}
      />
      <Route
        exact
        path="/backoffice/edit/categories/:id"
        component={CategoriesEditScreen}
      />
      <Route
        exact
        path="/backoffice/edit/activities/:id"
        component={EditActivityScreen}
      />
      <Route
        exact
        path="/backoffice/contacts/:id"
        component={BODetailContactsScreen}
      />
    </Switch>
  )
}

export default BackofficeRoutes
