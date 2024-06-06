import ImageUploader from "@/components/supplierComponent/ExistingProduct/imageuploader";
import TableDtailComponent from "@/components/supplierComponent/ExistingProduct/table-detail-component";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const AddNewProduct = () => {


    return (
        <SupplierWrapper>
            <>
                <div className="Existing-Product">
                    <h1>Add Product</h1>
                    <div className="input-field-data mt-0">
                        <div className="input-field">
                            <ImageUploader />
                            <TableDtailComponent />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end gap-3 mt-3">
                        <button className="button-list Cancel-btn ">Cancel</button>
                        <button className="button-list ">Save & Finish</button>
                    </div>
                </div>


            </>
        </SupplierWrapper>
    )
}

export default AddNewProduct;