import ManageInventoryComponent from "@/components/supplierComponent/manageinventory.component";
import ManagetableComponent from "@/components/supplierComponent/managetable.component";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ManageInventory = () => {
  return (
    <SupplierWrapper>
      <>
        <ManageInventoryComponent />
        <ManagetableComponent />
      </>
    </SupplierWrapper>
  )
}

export default ManageInventory;