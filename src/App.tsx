import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Splash from './pages/Splash';
import KYC from './pages/KYC';
import ConfirmOnboarding from './pages/ConfirmOnboarding';
import SecondOnboarding from './pages/SecondOnboarding';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Onboarding from './pages/Onboarding';
import NextOfKin from './pages/NextOFKin';
import SelfieUpload from './pages/SelfieUpload';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/splash" component={Splash} exact={true} />
        <Route path="/kyc" component={KYC} exact={true} />
        <Route path="/onboarding" component={Onboarding} exact={true} />
        <Route path="/confirmdetails" component={ConfirmOnboarding} exact={true} />
        <Route path="/secondonboarding" component={SecondOnboarding} exact={true} />
        <Route path="/nextofkin" component={NextOfKin} exact={true} />
        <Route path="/selfieupload" component={SelfieUpload} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/splash" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
