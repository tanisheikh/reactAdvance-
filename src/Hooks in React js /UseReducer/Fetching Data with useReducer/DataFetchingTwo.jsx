import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState={
    loadding:true,
    post:{},
    error:''
}
const reducer =(state,action)=>{
    switch(action.type){
case 'FETCH_DATA':
return{
    loadding:false,
    post:action.payload,
    error:''
}

case 'FETCH_ERROR':
    return{
        loadding:false,
        post:{},
        error:'Somthing went Wrong!!'
    }

default:
    return state
    }
}
const DataFetchingTwo = () => {
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
           const url = "https://jsonplaceholder.typicode.com/posts/1";
        
        axios.get(url).then(
res=>{
    dispatch({type:"FETCH_DATA",payload:res.data})
}
        ).catch(error=>{
            dispatch({type:"FETCH_ERROR"})

        })
    },[])
  return (
    <div>
           {state.loading ? "loading" :state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo