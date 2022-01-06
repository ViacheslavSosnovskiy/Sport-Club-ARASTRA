import {Route, Routes} from 'react-router-dom';
import {lazy} from 'react';

import Container from '../Container';
import AppBar from '../AppBar';
// import Hero from '../Hero';
// import Cards from '../Cards';

const HomePage = lazy(() => import('../../pages/HomePage'));
const TrainingPage = lazy(() => import('../../pages/TrainingPage'));
const PhotoPage = lazy(() => import('../../pages/PhotoPage'));
const AboutPage = lazy(() => import('../../pages/AboutPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));


export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route exact path="/">
            <HomePage /> 
        </Route>

        <Route exact path="/training">
          <TrainingPage />
        </Route>

        <Route exact path="/photo">
            <PhotoPage />
        </Route>

        <Route exact path="/about">
            <AboutPage />
        </Route>

        <Route exact path="/contacts">
            <ContactsPage />
        </Route>
      </Routes>

    </Container>
  );
}
