import React, { Component } from 'react'

import Article from '../components/Article'

import axios from 'axios'

import CustomForm from '../components/form'


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


            <div>

            <Article data={this.state.articles} />


<br/>
<h2>
    Create an article
</h2>
<CustomForm
type='post'
id='null'
/>

</div>



            )
    }
}
