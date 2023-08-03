import React,{useEffect, useLayoutEffect} from 'react'

const UseEffectLayout = () => {

    useEffect(()=>{
        console.log("useEffect1>>>")

    },[])

    useEffect(()=>{
        console.log("useEffect2>>>")

    },[])
    useEffect(()=>{
        console.log("useEffect3>>>")

    },[])
    useLayoutEffect(()=>{
        console.log("useLayoutEffect>>>")
    },[])
  return (
    <div>UseEffectLayout</div>
  )
}

export default UseEffectLayout