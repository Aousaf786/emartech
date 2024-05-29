import InventoryAnalyticsComponent from "@/components/supplierComponent/InventoryAnalyticscomponent/InventoryAnalytics.component";
import Linechartcomponent from "@/components/supplierComponent/InventoryAnalyticscomponent/Linechartcomponent";
import TableComponent from "@/components/supplierComponent/InventoryAnalyticscomponent/tableComponent";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const InventoryAnalytics = () => {
    return (
        <SupplierWrapper>
            <>
                <InventoryAnalyticsComponent />
                <Linechartcomponent />
                <TableComponent />
            </>
        </SupplierWrapper>
    )
}

export default InventoryAnalytics;