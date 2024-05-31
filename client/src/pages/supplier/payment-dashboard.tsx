import PaymentWidgets from "@/components/supplierComponent/payment-widgets.component";
import TableComponent from "@/components/supplierComponent/table.component";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";

const PaymentDashboard = () => {
  const tableData = [
    {
      Date: "19/03/2024 18:51:59",
      Activity: "Earnings",
      Description: "Order",
      From: "Payoneer",
      Order: "CC189259091BE",
      Amount: "023"
    },
    {
      Date: "19/03/2024 18:51:59",
      Activity: "Earnings",
      Description: "Order",
      From: "Payoneer",
      Order: "CC189259091BE",
      Amount: "-4646"
    }

  ];

  const columns = [
    { header: "Date", accessor: "Date" },
    { header: "Activity", accessor: "Activity" },
    { header: "Description", accessor: "Description" },
    { header: "From", accessor: "From" },
    { header: "Order", accessor: "Order" },
    { header: "Amount", accessor: "Amount" }
  ];



  return (
    <SupplierWrapper>
      <>
        <PaymentWidgets />
        <TableComponent
          tableData={tableData}
          itemsPerPage={4}
          columns={columns}
        />

      </>
    </SupplierWrapper>
  );
};

export default PaymentDashboard;