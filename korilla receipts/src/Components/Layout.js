import Receipt from "./Receipt";
import receipts from "./ReceiptsData";
function Layout() {
  return (
    <div className="receipt-holder">

      {receipts.map((Data, index) => {
        return <div className='space'>
          <Receipt person={Data.person} order={Data.order} />
          </div>
      })
      }
    </div>
  )
}
export default Layout;