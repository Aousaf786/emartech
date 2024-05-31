import SelesSnapshot from "@/components/ExecutorComponent/SelesSnapshot";
import SaleComponent from "@/components/ExecutorComponent/saleComponent";
import TableComponent from "@/components/supplierComponent/table.component";
import "../../components/supplierStyle.scss";
import { ExecutorWrapper } from "./executorWrapper";


const SalesDashboard = () => {
    const tableData = [
        {
            ProjectName: "Today so Far",
            TotalOrderItem: "1",

            UnitsOrdered: "0",
            OrderedProductSales: "AED 0.00",
            UnitOrderedItem: "0",
            SaleOrderedItem: "AED 0.00",

        },




    ];

    const columns = [
        { header: "", accessor: "ProjectName" },
        {
            header: "Total Order Item", accessor: "TotalOrderItem"
        },
        {
            header: "Units Ordered", accessor: "UnitsOrdered"
        },
        {
            header: "Ordered Product  Sales", accessor: "OrderedProductSales"
        },
        {
            header: "Avg. Unit Ordered Item", accessor: "UnitOrderedItem"
        },
        {
            header: "Avg. Sale Ordered Item", accessor: "SaleOrderedItem"
        },

    ];

    return (
        <ExecutorWrapper>
            <>
                <div className="manage-Inventory">
                    <h1> Sales Dashboard</h1>
                    <p>Seller Fulfilled</p>
                    <SaleComponent />
                    <SelesSnapshot />
                    <div className="table-content">
                        <h1>Compare Sales</h1>
                        <TableComponent
                            tableData={tableData}
                            itemsPerPage={4}
                            columns={columns}
                        />
                    </div>

                </div>
            </>
        </ExecutorWrapper>
    )
}

export default SalesDashboard;