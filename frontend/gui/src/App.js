import React from 'react'

import 'antd/dist/antd.css'

import CustomLayout from './containers/Layout'

import {BrowserRouter} from 'react-router-dom'

import BaseRouter from './routes'

import ArticleList from './containers/ArticleListView'

const App = () => {
  return (
    <BrowserRouter>
    <CustomLayout>
      <BaseRouter/>
    </CustomLayout>
    </BrowserRouter>

  )
}

export default App
