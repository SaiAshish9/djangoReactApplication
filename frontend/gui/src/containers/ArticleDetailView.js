import React, { Component } from 'react'


import axios from 'axios'

import {Card,Button} from 'antd'

import CustomForm from '../components/form'


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


async componentDidUpdate(prevProps){
    // if( this.state.article.length && (prevProps.article.title !== this.props.article.title || prevProps.article.content !== this.props.article.content)) {
       await axios.get(`/api/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({article:res.data})
        })   
    
    // }
}







handleDelete=(e)=>{
e.preventDefault()
    axios.delete(`http://localhost:8000/api/${this.props.match.params.id}`)



}


    render() {
        return (
<div>

<Card title={this.state.article.title}>
<p>
    {this.state.article.content}
</p>
</Card>
<br/>
<CustomForm
type='put'
id={this.props.match.params.id}
btnText='Update'
/>

<form onSubmit={()=>{
    this.handleDelete()
    }}>
    <Button  htmlType="submit" type="danger">
        Delete
    </Button>
</form>


</div>

            )
    }
}
