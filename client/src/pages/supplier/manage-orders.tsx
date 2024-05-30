import TabsComponent from "@/components/common/TabsComponent";
import OrderSelectorComponent from "@/components/common/orderSelectorComponent";
import TableComponent from "@/components/supplierComponent/table.component";
import "../../components/supplierStyle.scss";
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

    const tabItems = [
        {
            label: '0 Pending', value: '1', component: <> <OrderSelectorComponent refreshButton={<button className='refresh-button'>Refresh</button>} />
                <TableComponent
                    tableData={tableData}
                    itemsPerPage={4}
                    columns={columns}
                /></>
        },
        {
            label: '0 Unshipped', value: '2', component: <> <OrderSelectorComponent refreshButton={<button className='refresh-button'>Refresh</button>} />
                <TableComponent
                    tableData={tableData}
                    itemsPerPage={4}
                    columns={columns}
                /></>
        },
        {
            label: 'Cancelled', value: '3', component: <> <OrderSelectorComponent refreshButton={<button className='refresh-button'>Refresh</button>} />
                <TableComponent
                    tableData={tableData}
                    itemsPerPage={4}
                    columns={columns}
                /></>
        },
        {
            label: 'Shipped', value: '4', component: <> <OrderSelectorComponent refreshButton={<button className='refresh-button'>Refresh</button>} />
                <TableComponent
                    tableData={tableData}
                    itemsPerPage={4}
                    columns={columns}
                /></>
        },
        // Add more items as needed with their respective components
    ];


    return (
        <SupplierWrapper>
            <>
                <div className="manage-Inventory">
                    <h1>Manage Orders</h1>
                    <p>Seller Fulfilled</p>
                    <TabsComponent tabItems={tabItems} />

                </div>
            </>
        </SupplierWrapper>
    )
}

export default ManageOrders;