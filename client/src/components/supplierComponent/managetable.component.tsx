import { useState } from "react";
import tableimage from "../../assets/images/table-image.svg";
import PaginationComponent from "../common/pagination";


const ManagetableComponent = () => {
    const TableData = [
        {
            Status: "Active",
            Image: tableimage,
            ProductName: ["Signature Acrylic Signature", <br />, "Acrylic Colours – 100 gm"],
            DateCreated: "03/19/2024 13:05:46",
            shippingcost: " AED 14.99 + AED 0.00",
            FulfilmentBy: "Fulfilment By"


        },
        {
            Status: "Active",
            Image: tableimage,
            ProductName: ["Signature Acrylic Signature", <br />, "Acrylic Colours – 100 gm"],
            DateCreated: "03/19/2024 13:05:46",
            shippingcost: " AED 14.99 + AED 0.00",
            FulfilmentBy: "Fulfilment By"


        },
        {
            Status: "Inctive",
            Image: tableimage,
            ProductName: ["Signature Acrylic Signature", <br />, "Acrylic Colours – 100 gm"],
            DateCreated: "03/19/2024 13:05:46",
            shippingcost: " AED 14.99 + AED 0.00",
            FulfilmentBy: "Fulfilment By"


        },
        {
            Status: "Active",
            Image: tableimage,
            ProductName: ["Signature Acrylic Signature", <br />, "Acrylic Colours – 100 gm"],
            DateCreated: "03/19/2024 13:05:46",
            shippingcost: " AED 14.99 + AED 0.00",
            FulfilmentBy: "Fulfilment By"


        }]
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
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                Status
                            </th>
                            <th>
                                Image
                            </th>
                            <th>
                                Product Name
                                <span>SKU</span>
                            </th>
                            <th>
                                Date Created
                                <span>Status Change Date</span>
                            </th>
                            <th>
                                Available
                            </th>
                            <th>
                                Price & shipping
                                cost
                            </th>
                            <th>
                                Fulfilment By
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    {item.Status}
                                </td>
                                <td>
                                    <img src={item.Image} alt="" />

                                </td>
                                <td>
                                    {item.ProductName}
                                    <span>A37001BBA</span>
                                </td>
                                <td>
                                    {item.DateCreated}
                                    <span>04/04/2024 18:07:46</span>
                                </td>
                                <td>
                                    <select className="form-Available" aria-label="Default select example">
                                        <option selected>1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </select>
                                </td>
                                <td>
                                    <div className="shiping-cost">
                                        <span>AED</span>
                                        <span>14.99</span>
                                    </div>
                                    <p className="mb-0"> Lowest price:</p>
                                    {item.shippingcost}

                                </td>
                                <td >
                                    <div className="d-flex align-items-center gap-3">

                                        Emartech
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Edit</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <PaginationComponent count={Math.ceil(TableData.length / itemsPerPage)}
                page={currentPage}
                onPageChange={handlePageChange} />
        </div>
    )
}

export default ManagetableComponent;