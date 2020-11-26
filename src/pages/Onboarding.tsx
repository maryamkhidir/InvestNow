import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCol, IonAvatar, IonIcon, IonTextarea } from '@ionic/react';
import './styles.css';
import DefaultButton, {OutlinedButton, CustomInput, CustomTextarea} from  '../components/DefaultButton'
import Images from './imports'

const Onboarding: React.FC = () => {
    return (
      <IonPage>
        <IonHeader translucent  className="ion-no-border ion-no-shadow ion-header">
          <IonToolbar className='header-white-background' >
            <IonButtons slot="start">
              <IonBackButton style={{color:"#333333"}} defaultHref="/" icon="chevron-back"/>
            </IonButtons>
            <IonTitle style={{color:'#0E1B42', fontFamily:'Inter-SB', fontSize:18}}>
            <div style={{justifyContent:'center', alignItems:'center', display:'flex', marginLeft:-40}}>BVN Detail</div></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="other-background">
          <div style={{paddingLeft:10, paddingRight:10, marginBottom:50, marginTop:10}}>
            <img src={Images.indicator1} style={{width:'100%'}} alt=""/>
          </div>
          <CustomInput placeholder="Enter 9-Digit Number" inputlabel="Bank verification number (BVN)" customStyle={{marginTop:-25}} />

          <div style={{display:'flex', background: '#FFFFFF', border: '1px solid #F2F2F2', boxShadow: '0px 10px 23px rgba(146, 146, 210, 0.1)',borderRadius:10, padding:21, marginTop:9}}>
            <img src={Images.lock} style={{width:18, height:18, marginRight:20}} alt=""/>
            <div>
              <div style={{fontSize:14, color:'#EB5757', fontFamily:'Inter-Bold', marginBottom:11}}>Why we need your BVN</div>
              <div style={{color:'#9C9EB9', fontSize:12, marginBottom:12}}>We only need access to your:</div>
              <div style={{color:'#2D3142', fontSize:12, lineHeight:'24px'}}>✓   Full name <br/>
                    ✓   Phone number<br/>
                    ✓   Date of Birth</div>
              <div style={{borderBottom:'1px solid #9C9EB92A', marginTop:14, marginBottom:15}}></div>
              <div style={{display:'flex'}}><span style={{marginRight:12}}>🔒</span><span style={{color:'#9C9EB9', fontSize:10}}>Your BVN does not give us access to your bank accounts or transactions. </span></div>
            </div>
          </div>
          <CustomTextarea inputlabel="Residential addrress" placeholder="14 Asbifi Street, Ikeja, Lagos" rows={2} />

          <CustomInput placeholder="Adeola" inputlabel="Mother’s maiden name" />
          <div style={{flex:1, width:'100%', display:'flex', justifyContent:'center', alignItems:'flex-end', marginTop:45}}>
            <DefaultButton buttonlabel="Continue" path='confirmdetails' customStyle={{marginBottom:15}} />
          </div>
          <div style={{textAlign:'center', fontSize:16, color:'#757683', marginTop:5, marginBottom:30}}>Step 1 of 4</div>
        </IonContent>
      </IonPage>
    )
}

export default Onboarding;
