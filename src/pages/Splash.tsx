import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import './styles.css';
import DefaultButton, {OutlinedButton} from  '../components/DefaultButton'

const Splash: React.FC = () => {
    return (
      <IonPage>
        <IonContent fullscreen className="home-background" >
          <div className="container" >
            <div className="ion-text-center splash-text">Investing Made <span className="splash-alternate-text">Easy</span></div>
            <div className="splash-secondary-text">Investnow enables you to have complete management over your investments with us.</div>
            <DefaultButton buttonlabel="Get Started" customStyle={{marginBottom:15}} path="kyc" />
            <OutlinedButton buttonlabel="Sign in to your account" />
          </div>
        </IonContent>
      </IonPage>
    )
}

export default Splash;
