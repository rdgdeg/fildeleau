import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AccesPage } from './pages/AccesPage'
import { CartePage } from './pages/CartePage'
import { FaqPage } from './pages/FaqPage'
import { GaleriePage } from './pages/GaleriePage'
import { HomePage } from './pages/HomePage'
import { ConfidentialitePage, MentionsPage } from './pages/LegalPages'
import { MaisonPage } from './pages/MaisonPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OffrirPage } from './pages/OffrirPage'
import { ReserverPage } from './pages/ReserverPage'
import { TerrassePage } from './pages/TerrassePage'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/carte" element={<CartePage />} />
            <Route path="/terrasse" element={<TerrassePage />} />
            <Route path="/maison" element={<MaisonPage />} />
            <Route path="/galerie" element={<GaleriePage />} />
            <Route path="/acces" element={<AccesPage />} />
            <Route path="/reserver" element={<ReserverPage />} />
            <Route path="/offrir" element={<OffrirPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/mentions-legales" element={<MentionsPage />} />
            <Route path="/confidentialite" element={<ConfidentialitePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
