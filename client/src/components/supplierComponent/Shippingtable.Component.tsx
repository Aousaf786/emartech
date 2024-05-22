import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PaginationComponent from "../common/pagination";

const TableData = [
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Closed",
        className: "Closed"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Pending",
        className: "Pending"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Delivered",
        className: "Delivered"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Closed",
        className: "Closed"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Pending",
        className: "Pending"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Delivered",
        className: "Delivered"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "heelo",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Closed",
        className: "Closed"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "hello",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Pending",
        className: "Pending"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Delivered",
        className: "Delivered"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Closed",
        className: "Closed"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Pending",
        className: "Pending"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "hello",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Delivered",
        className: "Delivered"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Closed",
        className: "Closed"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Pending",
        className: "Pending"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Delivered",
        className: "Delivered"


    },
    {
        ShipmentName: "STA (04/02/2024 22:20)-ORF2",
        ShipmentNamespan: "17WJ0NWHX, 3GWCDU9R",
        LastUpdated: ["Apr 14, 2024", <br />, <span>6:24 AM</span>],
        Date: "Apr 2, 20243: 20 PM",
        ShipTo: "Ahmed",
        status: "Pending",
        className: "Pending"


    }]
const ShippingtableComponent = ({ searchQuery }: any) => {
    const navigate = useNavigate();
    const handleChange = (event: any) => {
        if (event.target.value === "trackShipment") {
            navigate("/shipment-summary");
        }
    };
    const itemsPerPage = 4; // Set items per page
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: any, value: any) => {
        setCurrentPage(value);
    };

    const filteredData = TableData.filter(item =>
        item.ShipmentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ShipmentNamespan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="table-manage">
            <div className="responsive-table">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                Shipment Name
                                <span>Shipment ID, Reference ID</span>
                            </th>
                            <th>
                                Created
                            </th>
                            <th>
                                Last Updated
                            </th>
                            <th>
                                Ship To
                            </th>
                            <th>
                                Unit Expected
                                <span>Units located</span>
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Next Steps
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    {item.ShipmentName}
                                    <span>{item.ShipmentNamespan}</span>
                                </td>

                                <td>
                                    {item.Date}
                                </td>
                                <td>
                                    {item.LastUpdated}
                                </td>
                                <td>
                                    {item.ShipTo}
                                </td>
                                <td>

                                    7
                                    <span>7</span>

                                </td>
                                <td>
                                    <button className={`button ${item.status}`}>{item.status}</button>
                                </td>
                                <td >
                                    <div className="d-flex align-items-center gap-3">


                                        <select className="form-select track-shipment" aria-label="Default select example" onChange={handleChange}>
                                            <option value="">select your option</option>
                                            <option value="trackShipment">Track Shipment</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <PaginationComponent
                count={Math.ceil(TableData.length / itemsPerPage)}
                page={currentPage}
                onPageChange={handlePageChange} />
            <p className="mt-3">* Please note that you may have an obligation to self report and pay sales and use, property, income, and other taxes/fees imposed by the states
                and localities where your inventory is located.</p>
        </div>
    )
}

export default ShippingtableComponent
