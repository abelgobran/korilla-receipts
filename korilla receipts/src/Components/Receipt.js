import receipts from'./ReceiptsData'
function Receipt (props){
    return(
        <div className='receipt'>
            <h1>{props.person}</h1>
            <p>{props.order.main}</p>
           <p>{props.order.protein}</p>
           <p>{props.order.rice}</p>
           <p>{props.order.sauce}</p>
           <p>{props.order.drink}</p>
           <p>{props.order.cost}</p>
        </div>
    )
}
export default Receipt;