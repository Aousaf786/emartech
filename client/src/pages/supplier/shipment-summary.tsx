import ShipmentPlan from "@/components/supplierComponent/Shipment-Plan";
import ShipmentSummaryComponent from "@/components/supplierComponent/shipmentsummary.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ShipmentSummary = () => {
    return (
        <SupplierWrapper>
            <>
                <ShipmentSummaryComponent />
                <ShipmentPlan />

            </>
        </SupplierWrapper>
    )
}

export default ShipmentSummary;