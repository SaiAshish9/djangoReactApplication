import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

class CustomForm extends React.Component{

 
handleFormSubmit =(e,type,id)=>{
e.preventDefault()

const title=e.target.elements.title.value
const content=e.target.elements.content.value


switch(type){
    case 'post':
return axios.post('http://localhost:8000/api/',{
    title:title,
    content:content
})
.then(res=>console.log(res))
.catch(error=>console.log(error))

    break;
    case 'put':

    return    axios.put(`http://localhost:8000/api/${id}/`,{
            title:title,
            content:content
        })
        .then(res=>console.log(res))
        .catch(error=>console.log(error))

}


}

render(){

const {type,id}=this.props

  return (
    <div>
      <form
      method="POST"
      onSubmit={e=>this.handleFormSubmit(e,type,id)}
      >
       <Form.Item label="Title">
          <Input name="title" placeholder="Put a title here" />
        </Form.Item>
        <Form.Item label="Content">
          <Input  name="content" placeholder="Content" />
        </Form.Item>
        <Form.Item >
          <Button  htmlType="submit" type="primary">Submit</Button>
        </Form.Item>
      </form>
    </div>
  );
}
};

export default CustomForm