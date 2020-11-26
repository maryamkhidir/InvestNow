import React, { ObjectHTMLAttributes } from 'react'
import { useHistory } from 'react-router-dom';
import { IonInput, IonLabel, IonTextarea, IonSelect, IonSelectOption } from '@ionic/react';

export interface ContainerProps { 
  buttonlabel?: string,
  customStyle?: React.CSSProperties,
  path?: string
}

export interface InputProps { 
  inputlabel?: string,
  placeholder?: string,
  disabled?: boolean,
  customStyle?: React.CSSProperties,
  rows?: number,
  options?: any,
}

const DefaultButton: React.FC<ContainerProps> = ({buttonlabel, customStyle, path}) => {
  const linkto = (path) ? path : ''
  const history = useHistory();
  const styles = {...customStyle, backgroundColor:'#FF5D5D', borderRadius:8, height:48, color:'#FFF', fontSize:16, fontWeight:600, width:'100%', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}
  return (
    <div style={styles} onClick={()=>history.push(linkto)}>
      {buttonlabel}
    </div>
  )
}

export const OutlinedButton: React.FC<ContainerProps> = ({buttonlabel, customStyle}) => {
  const styles = {...customStyle, backgroundColor:'transparent', border:'1px solid #FFFFFF', borderRadius:8, height:48, color:'#FFF', fontSize:16, fontWeight:600, width:'100%', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}
  return (
    <div style={styles}>
      {buttonlabel}
    </div>
  )
}

export const CustomInput: React.FC<InputProps> = ({inputlabel, placeholder, customStyle, disabled}) => {
  const styles = {...customStyle, paddingTop:25 }
  const labelStyles = {fontSize:14, lineHeight: '16px', textTransform: 'uppercase', color: '#051833'}

  const inputStyles = {backgroundColor:'#FFF', border:'1px solid rgba(208, 208, 208, 0.5)', borderRadius:6, height:48, color:'#757683', fontSize:16, fontWeight:400, width:'100%', marginTop:8}
  return (
    <div style={styles}>
      <IonLabel position="fixed" style={labelStyles}>{inputlabel}</IonLabel>
      <IonInput placeholder={placeholder} disabled={disabled} style={inputStyles} />
    </div>
  )
}

export const CustomSelect: React.FC<InputProps> = ({inputlabel, placeholder, customStyle, disabled, options}) => {
  const values = (options) ? options : {}
  const styles = {...customStyle, paddingTop:25 }
  const labelStyles = {fontSize:14, lineHeight: '16px', textTransform: 'uppercase', color: '#051833'}

  const inputStyles = {backgroundColor:'#FFF', border:'1px solid rgba(208, 208, 208, 0.5)', borderRadius:6, height:48, color:'#757683', fontSize:16, fontWeight:400, width:'100%', marginTop:8}
  return (
    <div style={styles}>
      <IonLabel position="fixed" style={labelStyles}>{inputlabel}</IonLabel>
      <IonSelect
          interface="action-sheet"
          multiple={false}
          style={inputStyles}
          placeholder={placeholder}
        >
          {values.map((val)=> <IonSelectOption value={val}>{val}</IonSelectOption>)}
          
        </IonSelect>
    </div>
  )
}

export const CustomTextarea: React.FC<InputProps> = ({inputlabel, placeholder, customStyle, rows}) => {
  const styles = {...customStyle, paddingTop:25 }
  const labelStyles = {fontSize:14, lineHeight: '16px', textTransform: 'uppercase', color: '#051833'}

  const inputStyles = {backgroundColor:'#FFF', border:'1px solid rgba(208, 208, 208, 0.5)', borderRadius:6, paddingLeft:10, paddingRight:10, color:'#757683', fontSize:16, fontWeight:400, width:'100%', marginTop:8}
  return (
    <div style={styles}>
      <IonLabel position="fixed" style={labelStyles}>{inputlabel}</IonLabel>
      <IonTextarea rows={rows} placeholder={placeholder} style={inputStyles} />
    </div>
  )
}


export default DefaultButton;
