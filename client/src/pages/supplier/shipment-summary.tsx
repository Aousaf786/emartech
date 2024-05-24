import ShipmentSummaryComponent from "@/components/supplierComponent/shipmentsummary.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ShipmentSummary = () => {
    return (
        <SupplierWrapper>
            <>
                <ShipmentSummaryComponent />

            </>
        </SupplierWrapper>
    )
}

export default ShipmentSummary;