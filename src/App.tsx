import React from 'react'
import Footer from './components/FooterComponent/IndexFooterComponent'
import AppRoutes from './Routes/AppRoutes'

const App = (): JSX.Element => {
  return (
    <AppRoutes>
      <Footer />
    </AppRoutes>
  )
}
export default App
