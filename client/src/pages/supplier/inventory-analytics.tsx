import InventoryAnalyticsComponent from "@/components/supplierComponent/InventoryAnalytics.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const InventoryAnalytics = () => {
    return (
        <SupplierWrapper>
            <>
                <InventoryAnalyticsComponent />
            </>
        </SupplierWrapper>
    )
}

export default InventoryAnalytics;