import React from 'react'
import {Avatar,Image} from 'antd'
import InputText from './InputText'

export const ChatBoxReciever = ({avatar,user,message}) => {
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
        <p style={{padding:10, backgroundColor:"#dcf8c6",borderRadius:10,maxWidth:100,marginLeft:'20px'}}>
            <strong style={{fontSize:13}}>
                {user}
            </strong><br/>
            {message}
        </p>
        
      </div>
    )
  }

export const ChatBoxSender = ({avatar,message,user}) => {
  return (
    <div  style={{display:'flex',justifyContent:'flex-end',flexDirection:'row'}}>
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
        <p style={{padding:10, backgroundColor:"white",borderRadius:10,maxWidth:120,marginRight:'30px' }}>
            <strong style={{fontSize:13}}>
                {user}
            </strong><br/>
              {message} 
        </p>
         
      </div>
  )
}

 
