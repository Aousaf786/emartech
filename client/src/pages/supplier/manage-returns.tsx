import ManageReturnsComponent from "@/components/supplierComponent/manage-returns.component";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ManageReturns = () => {

    return (
        <SupplierWrapper>
            <>
                <ManageReturnsComponent />

            </>
        </SupplierWrapper>
    )
}

export default ManageReturns;