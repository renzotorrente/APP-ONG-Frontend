export const getOrganizationLogo = () => {
  return {
    image:
      'https://alkemy-ong.s3.amazonaws.com/entries/organization/ong-logo2021-08-27T05:16:10-03:00',
  }
}

export const getConstructionImage = () => {
  return { image: 'under-construction.svg' }
}

export const getNavItems = () => {
  return [
    { text: 'Inicio', path: '/' },
    { text: 'Nosotros', path: '/about' },
    { text: 'Actividades', path: '/activities' },
    { text: 'Novedades', path: '/novedades' },
    { text: 'Testimonios', path: '/testimonies' },
    { text: 'Contacto', path: '/contact' },
    { text: 'Contribuye', path: '/contribute' },
  ]
}

export const loginRoute = '/login'
export const registerRoute = '/register'
