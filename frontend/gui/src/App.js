import React,{useEffect} from 'react'
import 'antd/dist/antd.css'
import CustomLayout from './containers/Layout'
import {BrowserRouter} from 'react-router-dom'
import BaseRouter from './routes'
import {connect} from 'react-redux'
import * as actions from './store/actions/auth'


const App = (props) => {

useEffect(()=>{

},[])

  return (
    <BrowserRouter>
    <CustomLayout {...props}>
      <BaseRouter/>
    </CustomLayout>
    </BrowserRouter>

  )
}

const mapStateToProps =state =>({
  isAuthenticated:state.token !== null
})

const mapDispatchToProps =dispatch =>({
  onTryAutoSignUp:()=>dispatch(actions.authCheckState())
})


export default connect(mapStateToProps,mapDispatchToProps)(App)
