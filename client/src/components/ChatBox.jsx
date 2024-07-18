import React from 'react'
import {Avatar,Image} from 'antd'
import InputText from './InputText'

export const ChatBoxReciever = ({avatar,userName,message}) => {
    return (
      <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'row'}}>
          <Avatar
            size={50}
            src={<Image
                src={avatar}
                style={{
                    objectFit:'cover',
                    width:45,
                    height:45,
                    borderRadius: "100%"
                }}
                preview={false}
                />}
            />
        <p style={{padding:20, backgroundColor:"#dcf8c6",borderRadius:10,maxWidth:100}}>
            <strong style={{fontSize:13}}>
                {userName}
            </strong><br/>
            {message}
        </p>
        
      </div>
    )
  }

export const ChatBoxSender = ({avatar,message,userName}) => {
  return (
    <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row'}}>
          <Avatar
            size={50}
            src={<Image
                src={avatar}
                style={{
                    objectFit:'cover',
                    width:45,
                    height:45,
                    borderRadius: "100%"
                }}
                preview={false}
                />}
            />
        <p style={{padding:20, backgroundColor:"white",borderRadius:10,maxWidth:50}}>
            <strong style={{fontSize:13}}>
                {userName}
            </strong><br/>
            {message}
        </p>
         
      </div>
  )
}

 
