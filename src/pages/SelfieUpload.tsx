import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCol, IonCheckbox, IonIcon, IonTextarea, IonRadio, IonRadioGroup, IonList } from '@ionic/react';
import './styles.css';
import DefaultButton, {OutlinedButton, CustomInput, CustomSelect} from  '../components/DefaultButton'
import Images from './imports'

const SelfieUpload: React.FC = () => {
    return (
      <IonPage>
        <IonHeader translucent  className="ion-no-border ion-no-shadow ion-header">
          <IonToolbar className='header-white-background' >
            <IonButtons slot="start">
              <IonBackButton style={{color:"#333333"}} defaultHref="/" icon="chevron-back"/>
            </IonButtons>
            <IonTitle style={{color:'#0E1B42', fontFamily:'Inter-SB', fontSize:18}}>
            <div style={{justifyContent:'center', alignItems:'center', display:'flex', marginLeft:-40}}>
            Upload Selfie and ID Card</div></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="other-background">
          <div style={{paddingLeft:10, paddingRight:10, marginBottom:10, marginTop:10}}>
            <img src={Images.indicator4} style={{width:'100%'}} alt=""/>
          </div>
          <div style={{display:'flex', alignItems:'center', marginBottom:22, justifyContent:'center'}}>
            <img src={Images.stamp} style={{width:201, height:215}} alt=""/>
          </div>
          
          <div style={{marginBottom:28, background: "#FFF", border: '1px solid #F2F2F2', boxShadow: '0px 10px 23px rgba(146, 146, 210, 0.1)', borderRadius:10, padding:18, display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>
              <img src={Images.selfie} style={{width:32, height:32, marginRight:19}} alt=""/>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{color:'#0E1B42', fontFamily:'Inter-SB', fontSize:16, marginBottom:7}}>Take a Selfie Photo</span>
                <span style={{color:'#BDBDBD',fontSize:10}}>Verify your identity</span>
              </div>
            </div>
            <div>
              <IonCheckbox className="radio" color="success" style={{ width:24, height:24, borderRadius:30}} />
            </div>
          </div>

          <div style={{marginBottom:28,background: "#FFF", border: '1px solid #F2F2F2', boxShadow: '0px 10px 23px rgba(146, 146, 210, 0.1)', borderRadius:10, padding:18, display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>
              <img src={Images.passport} style={{width:36, height:26, marginRight:19}} alt=""/>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{color:'#0E1B42', fontFamily:'Inter-SB', fontSize:16, marginBottom:7}}>Upload ID Card</span>
                <span style={{color:'#BDBDBD',fontSize:10}}>Voters card, Int’l passport, National ID</span>
              </div>
            </div>
            <div>
              <IonCheckbox className="radio" color="success" style={{ width:24, height:24, borderRadius:30}} />
            </div>
          </div>

          <div style={{marginBottom:28, background: "#FFF8FE", borderRadius:10, padding:18, display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>
              <img src={Images.lock} style={{width:18, height:18, marginRight:19}} alt=""/>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{color:'#233E63', fontFamily:'Inter-SB', fontSize:14, marginBottom:7}}>Why is this important</span>
                <span style={{color:'#BDBDBD',fontSize:10}}>Learn more about why we need these details</span>
              </div>
            </div>
        
          </div>

        </IonContent>
      </IonPage>
    )
}

export default SelfieUpload;
