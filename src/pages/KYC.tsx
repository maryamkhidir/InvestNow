import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCol, IonAvatar, IonIcon } from '@ionic/react';
import './styles.css';
import DefaultButton, {OutlinedButton} from  '../components/DefaultButton'
import Images from './imports'

const KYC: React.FC = () => {
    return (
      <IonPage>
        <IonHeader translucent  className="ion-no-border ion-no-shadow">
          <IonToolbar className='header-background' >
            <IonButtons style={{color:"#FFF"}}>
              <IonBackButton style={{color:"#FFF"}} defaultHref="/" icon="chevron-back" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="home-background-2" >
          <div className="background-container">
            <div className="container-2" >
              <div className="ion-text-center splash-text-2">Get ready for <br/>few simple questions</div>
              <div style={{backgroundColor:'#DE625A', borderRadius:12, height:76, color:'#FFF', fontSize:16, fontWeight:600, width:'100%', paddingLeft:15, paddingRight:15, display:'flex', justifyContent:'space-between', marginBottom:12, alignItems:'center',}}>
                <div style={{display:'flex', alignItems:'center', marginLeft:20, borderRight:' 1px solid #0043433A', width:'50%'}}>
                    <img src={Images.bulb} style={{width:24,height:24, marginRight:20}}/>
                    <div style={{flexDirection:'column', display:'flex'}}>
                      <span style={{fontFamily:'Inter-Bold', fontSize:30, lineHeight:'30px'}}>2</span>
                      <span style={{fontSize:12}}>minutes</span>
                    </div>
                </div>
                <div style={{display:'flex', alignItems:'center', marginLeft:20, width:'50%'}}>
                    <img src={Images.flag} style={{width:24,height:24, marginRight:20}}/>
                    <div style={{flexDirection:'column', display:'flex'}}>
                      <span style={{fontFamily:'Inter-Bold', fontSize:30, lineHeight:'30px'}}>9</span>
                      <span style={{fontSize:12}}>questions</span>
                    </div>
                </div>
              <div>
              </div>
            </div>

              <div className="instructions-card" style={{backgroundColor:'#FFF', padding:25, borderRadius:12,  width:'100%', display:'flex', height:333, flexDirection:'column', marginBottom:20}}>
                <div style={{color:'#3A364E', fontFamily:'Inter-Bold', fontSize:18, marginBottom:11, lineHeight:'24px'}} >Instruction</div>
                <div>
                  <div style={{display:'flex'}}>
                    <div style={{marginRight:20}}>
                      <span style={{backgroundColor:'#CFD0D2', borderRadius:10, width:10, height:10, marginTop:4, display:'block'}}></span>
                      <div style={{borderLeft:'1px dashed #878D957A', display:'flex', flex:1, height:50, marginLeft:5}}></div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column'}}>
                      <span style={{fontFamily:'Inter-Bold', fontSize:14,   color:'#161C25', marginBottom:5}}>Step 1</span>
                      <span style={{fontSize:14, color:'#161C25'}}>Input BVN Detail</span>
                    </div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div style={{marginRight:20}}>
                      <span style={{backgroundColor:'#CFD0D2', borderRadius:10, width:10, height:10, marginTop:4, display:'block'}}></span>
                      <div style={{borderLeft:'1px dashed #878D957A', display:'flex', flex:1, height:50, marginLeft:5}}></div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column'}}>
                      <span style={{fontFamily:'Inter-Bold', fontSize:14,   color:'#161C25', marginBottom:5}}>Step 2</span>
                      <span style={{fontSize:14, color:'#161C25'}}>Provide Next of Kin </span>
                    </div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div style={{marginRight:20}}>
                      <span style={{backgroundColor:'#CFD0D2', borderRadius:10, width:10, height:10, marginTop:4, display:'block'}}></span>
                      <div style={{borderLeft:'1px dashed #878D957A', display:'flex', flex:1, height:50, marginLeft:5}}></div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column'}}>
                      <span style={{fontFamily:'Inter-Bold', fontSize:14,   color:'#161C25', marginBottom:5}}>Step 3</span>
                      <span style={{fontSize:14, color:'#161C25'}}>Validate Bank Account</span>
                    </div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div style={{marginRight:20}}>
                      <span style={{backgroundColor:'#CFD0D2', borderRadius:10, width:10, height:10, marginTop:4, display:'block'}}></span>
                    </div>
                    <div style={{display:'flex', flexDirection:'column'}}>
                      <span style={{fontFamily:'Inter-Bold', fontSize:14,   color:'#161C25', marginBottom:5}}>Step 4</span>
                      <span style={{fontSize:14, color:'#161C25'}}>Upload Selfie and ID Cards</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{flex:1, display:'flex', flexDirection:'column'}}></div>
              <div style={{flex:1, width:'100%', display:'flex', justifyContent:'center', alignItems:'flex-end'}}>
                <DefaultButton path="onboarding" buttonlabel="Let's start" customStyle={{marginBottom:15}} />
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    )
}

export default KYC;
