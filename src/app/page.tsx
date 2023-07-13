'use client'

import { ThemeProvider } from '@mui/material/styles'
import ResponsiveBaseLayout from '@/components/layouts/ResponsiveBaseLayout'
import SectionTitleLayout from '@/components/layouts/SectionTitleLayout'
import ItemView from '@/components/views/ItemView'
import theme from '@/utils/theme'
import { Suspense } from 'react'
import { Skeleton } from '@mui/material'

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <main>
        <ResponsiveBaseLayout>
          <Suspense fallback={
            <>
              <Skeleton animation="wave" />
            </>}>
            <SectionTitleLayout title="posts">
                <ItemView data={fetch("http://localhost:3000/api/posts?userId=1",
                  { cache: 'no-store' }
                )}/>
            </SectionTitleLayout>
          </Suspense>
          <Suspense fallback={<Skeleton variant="rectangular" animation="wave" width={270} height={270}/>}>
            <SectionTitleLayout title="photos">
              <ItemView data={fetch("http://localhost:3000/api/photos?albumId=1",
                { cache: 'no-store' }
              )}/>
            </SectionTitleLayout>
          </Suspense>
        </ResponsiveBaseLayout>
      </main>
    </ThemeProvider>

  )
}
