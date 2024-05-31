import ManageClaimsComponent from "@/components/supplierComponent/manage-claims.component";
import TableComponent from "@/components/supplierComponent/table.component";
import ViewGrantedClaims from "@/components/supplierComponent/view-granted-claims";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ManageClaims = () => {
    const tableData = [
        {
            ClaimID: "OKY-123-VHGK",
            ClaimDate: "19/03/2024 18:51:59",
            ClaimStatus: <button className="button Delivered">Granteed</button>,
        },
        {
            ClaimID: "OKY-123-VHGK",
            ClaimDate: "19/03/2024 18:51:59",
            ClaimStatus: <button className="button Closed">Denied</button>,
        }
    ];

    const columns = [
        { header: "Claim ID", accessor: "ClaimID" },
        { header: "Claim Date", accessor: "ClaimDate" },
        { header: "Claim Status", accessor: "ClaimStatus" },

    ];
    return (
        <SupplierWrapper>
            <>
                <ManageClaimsComponent />
                <ViewGrantedClaims />
                <p className="all-heading-claims">All Claims</p>
                <TableComponent
                    tableData={tableData}
                    itemsPerPage={4}
                    columns={columns}
                />
            </>
        </SupplierWrapper>
    )
}

export default ManageClaims;