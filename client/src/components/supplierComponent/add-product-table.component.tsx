import { useState } from "react";
import tableimage from "../../assets/images/table-image.svg";
import PaginationComponent from "../common/pagination";


const AddProductTableComponent = () => {
    const TableData = [
        {
            Image: tableimage,
            description: "Signature Acrylic Colours – 100 gm",
            DateCreated: "A37001BBA",
            shippingcost: " AED 14.99 + AED 0.00",
            FulfilmentBy: "Fulfilment By"


        },
        {
            Status: "Active",
            Image: tableimage,
            description: "Signature Acrylic Colours – 100 gm",
            DateCreated: "A37001BBA",
            shippingcost: " AED 14.99 + AED 0.00",
            FulfilmentBy: "Fulfilment By"


        },
    ]
    const itemsPerPage = 4; // Set items per page
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: any, value: any) => {
        setCurrentPage(value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = TableData.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div className="table-manage">

            <div className="responsive-table">
                <h6 style={{ padding: " 20px 10px", borderBottom: "1px solid #000" }}>   Display 1-1 of 1 results</h6>
                <table className="table table-hover">

                    <tbody>
                        {currentItems.map((item, i) => (
                            <tr key={i}>

                                <td>
                                    <img src={item.Image} alt="" />

                                </td>
                                <td>
                                    {item.description}
                                </td>
                                <td>
                                    <div className="d-flex gap-1">
                                        <span style={{ color: "#000" }}>EAN</span>
                                        {item.DateCreated}
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex gap-1">
                                        <span style={{ color: "#000" }}>Sales Rank:</span>
                                        122
                                    </div>
                                    <div className="d-flex gap-1">
                                        <span style={{ color: "#000" }}>Offers: </span>
                                        1 Used & New
                                    </div>

                                </td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Condition</option>
                                        <option value="Existing">Existing</option>
                                        <option value="New">New</option>

                                    </select>

                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <button className="button-list">List the Products</button>
            <PaginationComponent count={Math.ceil(TableData.length / itemsPerPage)}
                page={currentPage}
                onPageChange={handlePageChange} />
        </div>
    )
}

export default AddProductTableComponent;