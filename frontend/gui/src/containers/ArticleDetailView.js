import React, { Component } from 'react'


import axios from 'axios'

import {Card} from 'antd'

export default class ArticleDetailView extends Component {


state={
  article:{}  
}

componentDidMount(){

axios.get(`/api/${this.props.match.params.id}`)
.then(res=>{
    this.setState({article:res.data})
    console.log(res.data)
})

}

    render() {
        return (

<Card title={this.state.article.title}>
<p>
    {this.state.article.content}
</p>
</Card>
            )
    }
}
