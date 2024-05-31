import ExistingProductComponent from "@/components/supplierComponent/ExistingProduct/existing-product-component";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ExistingProduct = () => {


    return (
        <SupplierWrapper>
            <>
                <ExistingProductComponent />
            </>
        </SupplierWrapper>
    )
}

export default ExistingProduct;