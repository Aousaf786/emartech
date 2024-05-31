import OrderDetailsWidget from "@/components/ExecutorComponent/order-detail-widgets.component";
import TableComponent from "@/components/supplierComponent/table.component";
import "../../components/supplierStyle.scss";
import { ExecutorWrapper } from "./executorWrapper";

const OrderDetails = () => {
  const tableData = [
    {
      Status: [<button className="button Delivered">Payment Completed</button>],
      Productname: [<span style={{ color: "#029358" }}>Paint</span>, "SKU: 123UNLJ123"],
      MoreInformation: ["Order Item Id", <br />, "123456789"],
      Quantity: "20",
      UnitPrice: "AED 200",
      Proceeds: [
        <>
          <div className="d-flex justify-content-between">
            <p className="mb-0">Item Sub total: </p>
            <span>AED 200</span>
          </div>
          <div className="d-flex justify-content-between">
            <p className="mb-0" style={{ color: "#000", fontWeight: "600" }}>Item Total:</p>
            <span>AED 200</span>
          </div>
        </>
      ]
    },


  ];

  const columns = [
    { header: "Status", accessor: "Status" },
    { header: "Product name", accessor: "Productname" },
    { header: "More Information", accessor: "MoreInformation" },
    { header: "Quantity", accessor: "Quantity" },
    { header: "Unit Price", accessor: "UnitPrice" },
    { header: "Proceeds", accessor: "Proceeds" }
  ];



  return (
    <ExecutorWrapper>
      <>
        <OrderDetailsWidget />
        <div className="table-content">
          <h1>Order Content</h1>
          <TableComponent
            tableData={tableData}
            itemsPerPage={4}
            columns={columns}
          />
        </div>

      </>
    </ExecutorWrapper>
  );
};

export default OrderDetails;