import React from 'react'
import {Route,Switch} from 'react-router-dom'

import ArticleList from './containers/ArticleListView'
import Detail from './containers/ArticleDetailView'
import Login from './containers/Login'
import Signup from './containers/Signup'

const BaseRouter=()=>(

<Switch>

<Route exact path="/" component={ArticleList}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/signup" component={Signup}/>
<Route exact path="/articles/:id" component={Detail}/>
</Switch>

)

export default BaseRouter