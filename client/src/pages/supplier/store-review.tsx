import TableComponent from "@/components/supplierComponent/table.component";
import { Icon } from "@iconify/react/dist/iconify.js";
import image from "../../assets/images/Rectangle-table-img.png";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const StoreReview = () => {
    const tableData = [
        {
            SrNo: "1",
            Image: [
                <img src={image} alt="image not dfound" />
            ],
            ProductName: "Paint",
            Rating: [
                <div className="d-flex gap-1">
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                </div>
            ],
            ClientName: "Muhammad Ali",
            Review: "564",
        },
        {
            SrNo: "2",
            Image: [
                <img src={image} alt="image not dfound" />
            ],
            ProductName: "Paint",
            Rating: [
                <div className="d-flex gap-1">
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                </div>
            ],
            ClientName: "Muhammad Ali",
            Review: "564",
        },
        {
            SrNo: "3",
            Image: [
                <img src={image} alt="image not dfound" />
            ],
            ProductName: "Paint",
            Rating: [
                <div className="d-flex gap-1">
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                    <Icon icon="emojione:star" width={20} height={20} />
                </div>
            ],
            ClientName: "Muhammad Ali",
            Review: "564",
        },

    ];

    const columns = [
        { header: "Sr. No", accessor: "SrNo" },
        { header: "Image", accessor: "Image" },
        { header: "Product Name", accessor: "ProductName" },
        { header: "Rating", accessor: "Rating" },
        { header: "Client Name", accessor: "ClientName" },
        { header: "Review", accessor: "Review" }
    ];
    return (
        <SupplierWrapper>
            <>
                <div className="manage-Inventory">
                    <h1>Store Review</h1>
                </div>
                <TableComponent
                    tableData={tableData}
                    itemsPerPage={4}
                    columns={columns}
                />
            </>
        </SupplierWrapper>
    )
}

export default StoreReview;