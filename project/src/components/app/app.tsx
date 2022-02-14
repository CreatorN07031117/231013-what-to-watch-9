import React from 'react';
import MainScreen from '../main/main';
import VisuallyHidden from '../visually-hidden/visually-hiden';

type AppScreenProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

function App ({promoFilmTitle, promoFilmGenre, promoFilmYear}: AppScreenProps): JSX.Element {
  return (
    <React.Fragment>
      <VisuallyHidden />
      <MainScreen promoFilmTitle={promoFilmTitle} promoFilmGenre={promoFilmGenre} promoFilmYear={promoFilmYear}/>
    </React.Fragment>
  );
}

export default App;
