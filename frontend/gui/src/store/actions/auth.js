import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart=()=>{
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess=token=>({
    type:actionTypes.AUTH_SUCCESS,
    token:token
})

export const authFail=e=>({
    type:actionTypes.AUTH_FAIL,
    error:e
})


export const logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    return {
        type:actionTypes.AUTH_LOGOUT
    }


}


export const checkAuthTimeout=exptime=>{
    return dispatch=>{
        setTimeout(()=>{

dispatch(logout())

        },exptime*1000)
    }
}


export const authLogin=(username,password)=>{
return dispatch =>{
dispatch(authStart())    
axios.post(`http://localhost:8000/rest-auth/login/`,{
    username:username,
    password:password
})
.then(res=>{
   const token=res.data.key 
   const expDate=new Date(new Date().getTime()+3600*1000)   
   localStorage.setItem('token',token)
   localStorage.setItem('expirationDate',expDate)
    dispatch(authSuccess(token))
    dispatch(checkAuthTimeout(3600))
})
.catch(err=>{
    dispatch(authFail(err))
})
}
}


export const authSignup=(username,email,password1,password2)=>{
    return dispatch =>{
    dispatch(authStart())    
    axios.post(`http://localhost:8000/rest-auth/registration/`,{
        username,
        email,
        password1,
        password2
    })
    .then(res=>{
       const token=res.data.key 
       const expDate=new Date(new Date().getTime()+3600*1000)   
       localStorage.setItem('token',token)
       localStorage.setItem('expirationDate',expDate)
        dispatch(authSuccess(token))
        dispatch(checkAuthTimeout(3600))
    })
    .catch(err=>{
        dispatch(authFail(err))
    })
    }
    }


export const authCheckState=()=>{
    return dispatch =>{
        const token=localStorage.getItem('token')
        if(token === undefined)
        dispatch(logout())
        else{
            const expDate=new Date(localStorage.getItem('expirationDate'))
            if(expDate <= new Date()){
                dispatch(logout())
            }else{
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeout((expDate.getTime()-new Date().getTime())/1000))
            }
        }

    }
}
