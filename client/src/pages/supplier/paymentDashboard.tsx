import PaymentWidgets from "@/components/supplierComponent/payment-widgets.component";
import TableComponent from "@/components/supplierComponent/table.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";

export const PaymentDashboard = () => {
  const tableData = [
    {
      Date: "19/03/2024 18:51:59",
      Activity: "Earnings",
      Description: "Order",
      From: "Payoneer",
      Order: "CC189259091BE",
      Amount: "Amount"
    },
    {
      Date: "19/03/2024 18:51:59",
      Activity: "Earnings",
      Description: "Order",
      From: "Payoneer",
      Order: "CC189259091BE",
      Amount: "Amount"
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
