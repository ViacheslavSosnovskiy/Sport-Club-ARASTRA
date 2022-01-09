import {Route, Routes} from 'react-router-dom';
// import {lazy} from 'react';

import Container from '../Container';
import AppBar from '../AppBar';
// import Hero from '../Hero';
// import Cards from '../Cards';

import HomePage from '../../pages/HomePage';
import TrainingPage from '../../pages/TrainingPage';
import PhotoPage from '../../pages/PhotoPage';
import AboutPage from '../../pages/AboutPage';
import ContactsPage from '../../pages/ContactsPage';

// const HomePage = lazy(() => import('../../pages/HomePage'));
// const TrainingPage = lazy(() => import('../../pages/TrainingPage'));
// const PhotoPage = lazy(() => import('../../pages/PhotoPage'));
// const AboutPage = lazy(() => import('../../pages/AboutPage'));
// const ContactsPage = lazy(() => import('../../pages/ContactsPage'));


export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>

        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/training" element={<TrainingPage />} /> 

        <Route exact path="/photo" element={<PhotoPage />} />

        <Route exact path="/about" element={<AboutPage />} />

        <Route exact path="/contacts" element={<ContactsPage />} />
    
      </Routes>

    </Container>
  );
}
