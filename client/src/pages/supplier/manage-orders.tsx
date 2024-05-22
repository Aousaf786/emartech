import ManageOrdersComponent from "@/components/supplierComponent/manage-orders.component";
import TableComponent from "@/components/supplierComponent/table.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ManageOrders = () => {
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
                <ManageOrdersComponent />
                <TableComponent
                    tableData={tableData}
                    itemsPerPage={4}
                    columns={columns}
                />
            </>
        </SupplierWrapper>
    )
}

export default ManageOrders;