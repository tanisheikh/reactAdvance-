import React,{useState,useLayoutEffect} from 'react'

const UseLayOutEffect = () => {
    const[value,setValue]= useState('react');
    useLayoutEffect(()=>{
        if(value=="react"){
            setValue('react js hooks')
        }
        console.log('UseLayoutEffect is called with the value of ', value);

    },[value])
  return (
    <div>{value} is the greatest portal for geeks!</div>)
}

export default UseLayOutEffect