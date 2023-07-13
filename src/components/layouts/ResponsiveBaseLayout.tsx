import type { ReactNode } from 'react'

import Grid from '@mui/material/Grid'

interface ResponsiveBaseLayoutProps {
  children: ReactNode
}

function ResponsiveBaseLayout({ children }: ResponsiveBaseLayoutProps) {
  return (
    <Grid container direction="row">
      <Grid item sm={0} md={2} />
      <Grid item sm={12} md={8}>
        {children}
      </Grid>
      <Grid item sm={0} md={2} />
    </Grid>
  )
}

export default ResponsiveBaseLayout
