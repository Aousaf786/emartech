import TabsComponent from "@/components/common/TabsComponent";
import OrderSelectorComponent from "@/components/common/orderSelectorComponent";
import TableComponent from "@/components/supplierComponent/table.component";
import { Link } from "react-router-dom";
import "../../components/supplierStyle.scss";
import { ExecutorWrapper } from "./executorWrapper";


const Orders = () => {
    const tableData = [
        {
            Date: "19/03/2024 18: 51: 59",
            OrderDetail: [
                " Buyer Name: ", <span style={{ color: "#029358" }}>Khadija</span>, "Fulfilment Method: Emartech", <br />, "Fulfilment Channel: Emartech", <br />, "Seller order ID: 111-5563326-7333838"
            ],
            Productname: [<span style={{ color: "#029358" }}>Paint</span>, "SKU: 123UNLJ123"],
            OrderType: [
                <div className="d-flex justify-content-between">
                    <button className="button Delivered">Payment Completed</button>
                    <Link to={"/order-details"}>View Detail</Link>
                </div>
            ],

        },
        {
            Date: "19/03/2024 18: 51: 59",
            OrderDetail: [
                " Buyer Name: ", <span style={{ color: "#029358" }}>Khadija</span>,
                , "Fulfilment Method: Emartech", <br />, "Fulfilment Channel: Emartech", <br />, "Seller order ID: 111-5563326-7333838"
            ],
            Productname: [<span style={{ color: "#029358" }}>Paint</span>, "SKU: 123UNLJ123"],
            OrderType: [
                <div className="d-flex justify-content-between">
                    <button className="button Pending">Pending</button>
                    <Link to={"/order-details"}>View Detail</Link>
                </div>
            ],

        },

    ];

    const columns = [
        { header: "Date", accessor: "Date" },
        { header: "Order Detail", accessor: "OrderDetail" },
        { header: "Product name", accessor: "Productname" },
        { header: "Order Type", accessor: "OrderType" },

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
        <ExecutorWrapper>
            <>
                <div className="manage-Inventory">
                    <h1> Orders</h1>
                    <p>Seller Fulfilled</p>
                    <TabsComponent tabItems={tabItems} />

                </div>
            </>
        </ExecutorWrapper>
    )
}

export default Orders;