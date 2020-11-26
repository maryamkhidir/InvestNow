import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCol, IonAvatar, IonIcon, IonTextarea } from '@ionic/react';
import './styles.css';
import DefaultButton, {OutlinedButton, CustomInput, CustomTextarea} from  '../components/DefaultButton'
import Images from './imports'

const ConfirmOnboarding: React.FC = () => {
    return (
      <IonPage>
        <IonHeader translucent  className="ion-no-border ion-no-shadow ion-header">
          <IonToolbar className='header-white-background' >
            <IonButtons slot="start">
              <IonBackButton style={{color:"#333333"}} defaultHref="/" icon="chevron-back"/>
            </IonButtons>

            <IonTitle >
            <div style={{justifyContent:'center', alignItems:'center', display:'flex', marginLeft:-40}}>
              <img src={Images.logo} style={{height:25, width:153}} alt=""/>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="other-background">
          <div style={{marginBottom:65, marginTop:20, textAlign:'center'}}>
            <div style={{color:'#1D1D1D', fontFamily:'Inter-Bold', fontSize:20, marginBottom:7}}>
              Confirm your details
            </div>
          <div style={{color:'#757683', fontSize:16,}}>Verify your identity</div>
          </div>

          <CustomInput inputlabel="Full Name" placeholder="Paul Adedeji" customStyle={{marginTop:-25}} />

          <CustomInput inputlabel="Email Address" placeholder="cristina@alora.com" />
          
          <CustomInput inputlabel="Phone number" placeholder="07049574898" />

          <div style={{flex:1, width:'100%', display:'flex', justifyContent:'center', alignItems:'flex-end', marginTop:45, marginBottom:30}}>
            <DefaultButton buttonlabel="Continue" path='secondonboarding' customStyle={{marginBottom:15}} />
          </div>
        </IonContent>
      </IonPage>
    )
}

export default ConfirmOnboarding;
