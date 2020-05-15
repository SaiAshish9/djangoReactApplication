import React, { Component } from 'react'

import Article from '../components/Article'

import axios from 'axios'


export default class ArticleListView extends Component {


state={
  articles:[]    
}

componentDidMount(){

axios.get('/api')
.then(res=>{
    this.setState({articles:res.data})
    console.log(res.data)
})

}

    render() {
        return (
            <Article data={this.state.articles} />
        )
    }
}
