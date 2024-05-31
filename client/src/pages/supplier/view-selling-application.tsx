import { SearchComponent } from "@/components/inputs/search";
import TableComponent from "@/components/supplierComponent/table.component";
import { useState } from "react";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ViewSellingApplication = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const tableData = [
        {
            ApplicationName: "Medicube branded",
            ApplicationType: "Brand",
            Changed: "April 13, 2024",
            Status: [
                <div className="d-flex align-items-center justify-content-between">
                    Draft <button className="button Closed">Go to Application</button>
                </div>],

        },
        {
            ApplicationName: "Medicube branded",
            ApplicationType: "Brand",
            Changed: "April 13, 2024",
            Status: [
                <div className="d-flex align-items-center justify-content-between">
                    Approved <button className="button Delivered">List Products</button>
                </div>],
        },
        {
            ApplicationName: "Medicube branded",
            ApplicationType: "Brand",
            Changed: "April 13, 2024",
            Status: [
                <div className="d-flex align-items-center justify-content-between">
                    Please Refer to Case log <button className="button Pending">Re-apply</button>
                </div>],
        }
    ];

    const columns = [
        { header: ["Application Name", <span>Case ID</span>], accessor: "ApplicationName" },
        { header: "Application Type", accessor: "ApplicationType" },
        { header: "Changed", accessor: "Changed" },
        { header: "Status", accessor: "Status" },

    ];
    return (
        <SupplierWrapper>
            <>
                <div className="manage-Inventory">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <h1>View Selling Applications</h1>
                            <p>Track and manage your selling application status.</p></div>
                        <div className="col-lg-4">

                            <SearchComponent onSearch={setSearchQuery} />
                        </div>
                    </div>
                    <TableComponent
                        tableData={tableData}
                        itemsPerPage={4}
                        columns={columns}
                    />
                </div>

            </>
        </SupplierWrapper>
    )
}

export default ViewSellingApplication;