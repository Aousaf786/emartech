import Widgets from "@/components/supplierComponent/Widgets";
import Chart from "@/components/supplierComponent/chart";
import TableComponent from "@/components/supplierComponent/table.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";

export const SupplierDashboard = () => {
  const tableData = [
    {
      Referance: "CUK-21500031-COC",
      Date: "19/03/2024 18:51:59",
      Amount: "AED 1,225.09",
      Payment: "VISA",
      Status: "Shipped"
    },
    {
      Referance: "CUK-21500031-COC",
      Date: "19/03/2024 18:51:59",
      Amount: "AED 1,225.09",
      Payment: "VISA",
      Status: "Shipped"
    }
  ];

  const columns = [
    { header: "Reference", accessor: "Referance" },
    { header: "Date", accessor: "Date" },
    { header: "Amount", accessor: "Amount" },
    { header: "Payment", accessor: "Payment" },
    { header: "Status", accessor: "Status" }
  ];
  return (
    <SupplierWrapper>
      <>
        <Widgets />
        <Chart />
        <div className="table-content">
          <h1>Recent Orders</h1>
          <TableComponent
            tableData={tableData}
            itemsPerPage={4}
            columns={columns}
          />
        </div>
      </>
    </SupplierWrapper>
  );
};
