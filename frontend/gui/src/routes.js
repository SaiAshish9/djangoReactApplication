import React from 'react'

import {Route} from 'react-router-dom'

import ArticleList from './containers/ArticleListView'

import Detail from './containers/ArticleDetailView'

const BaseRouter=()=>(

<div>

<Route exact path="/" component={ArticleList}/>
<Route path="/:id" component={Detail}/>

</div>

)

export default BaseRouter