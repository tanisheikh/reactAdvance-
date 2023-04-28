const Repeat=(props)=>{
    let item=[];
    let arrayData=props.array
    console.log("arrayData.length>>",arrayData.length)
    for(let i=0; i< arrayData.length;i++){
        item.push(props.children(arrayData[i],i));
    }
    console.log("item>>",item)

    return <div>{item}</div>;

}

//  export const   ListOfTenThings=()=>{
//     return(
//         <Repeat numTimes={10}>
//       {(index) => <div key={index}>This is item {index} in the list</div>}
//         </Repeat>
//     )
// }
export default Repeat;