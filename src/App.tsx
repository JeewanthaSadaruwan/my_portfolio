import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { HomePage } from '@/pages/HomePage'
import { ExperienceGalleryPage } from '@/pages/ExperienceGalleryPage'
import { ExperiencePage } from '@/pages/ExperiencePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProjectGalleryPage } from '@/pages/ProjectGalleryPage'
import { ProjectPage } from '@/pages/ProjectPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/experience/:slug/gallery" element={<ExperienceGalleryPage />} />
          <Route path="/experience/:slug" element={<ExperiencePage />} />
          <Route path="/projects/:slug/gallery" element={<ProjectGalleryPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
