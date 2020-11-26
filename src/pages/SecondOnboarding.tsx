import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCol, IonAvatar, IonIcon, IonTextarea } from '@ionic/react';
import './styles.css';
import DefaultButton, {OutlinedButton, CustomInput, CustomSelect} from  '../components/DefaultButton'
import Images from './imports'

const SecondOnboarding: React.FC = () => {
    return (
      <IonPage>
        <IonHeader translucent  className="ion-no-border ion-no-shadow ion-header">
          <IonToolbar className='header-white-background' >
            <IonButtons slot="start">
              <IonBackButton style={{color:"#333333"}} defaultHref="/" icon="chevron-back"/>
            </IonButtons>
            <IonTitle style={{color:'#0E1B42', fontFamily:'Inter-SB', fontSize:18}}>
            <div style={{justifyContent:'center', alignItems:'center', display:'flex', marginLeft:-40}}>
              Validate Bank Account</div></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="other-background">
          <div style={{paddingLeft:10, paddingRight:10, marginBottom:50, marginTop:10}}>
            <img src={Images.indicator2} style={{width:'100%'}} alt=""/>
          </div>

          <CustomSelect inputlabel="Select bank name" placeholder="UBA Bank" customStyle={{marginTop:-25}} options={['UBA Bank', 'GT Bank', 'Zenith Bank']} />

          <CustomInput inputlabel="Enter account number" placeholder="08372818373383" />
          
          <CustomInput inputlabel="Account name" placeholder="Usman Abiola" disabled={true} />

          <div style={{flex:1, width:'100%', display:'flex', justifyContent:'center', alignItems:'flex-end', marginTop:45}}>
            <DefaultButton buttonlabel="Continue" path='nextofkin' customStyle={{marginBottom:15}} />
          </div>
          <div style={{textAlign:'center', fontSize:16, color:'#757683', marginTop:5, marginBottom:30}}>Step 2 of 4</div>
        </IonContent>
      </IonPage>
    )
}

export default SecondOnboarding;
