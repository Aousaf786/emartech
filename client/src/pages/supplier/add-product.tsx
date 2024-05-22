import AddProductComponent from "@/components/supplierComponent/add-product.component";
import "../../components/supplierComponent/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const AddProduct = () => {


    return (
        <SupplierWrapper>
            <>
                <AddProductComponent />
                {/* <AddProductTableComponent /> */}
            </>
        </SupplierWrapper>
    )
}

export default AddProduct;