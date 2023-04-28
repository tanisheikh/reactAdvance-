import React from 'react'

function KeyFragment(props) {
    const arrayData=props.arrayData
  return (
    <div>{arrayData.map((data)=>(
        <React.Fragment key={data.id}>
            <dt>{data.id}</dt>
            <dt>{data.name}</dt>

        </React.Fragment>
    ))}</div>
  )
}

export default KeyFragment;