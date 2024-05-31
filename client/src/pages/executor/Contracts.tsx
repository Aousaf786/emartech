import OrderSelectorComponent from "@/components/common/orderSelectorComponent";
import TableComponent from "@/components/supplierComponent/table.component";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import pdf from "../../assets/images/HTML_CSS_interview_question_.pdf";
import "../../components/supplierStyle.scss";
import { ExecutorWrapper } from "./executorWrapper";


const Contracts = () => {
    const tableData = [
        {
            ContractDetail: [<span style={{ color: "#029358" }}>Contract 1</span>, "1 year"],
            StartDate: "12/10/2021",
            EndingDate: "12/10/2022",
            Documents: [
                <div className="d-flex justify-content-between">
                    <Link to={"/contracts-details"} style={{ color: "#000" }}><Icon icon="mingcute:pdf-fill" width={25} height={25} style={{ color: "#000", marginRight: "10px" }} />Contract1.pdf</Link>
                    <a href={pdf} download>
                        <Icon icon="fa:download" style={{ color: "#000" }} />
                    </a>
                </div>
            ],
            Status: [<button className="button Pending">Under Review</button>]

        },
        {
            ContractDetail: [<span style={{ color: "#029358" }}>Contract 1</span>, "1 year"],
            StartDate: "12/10/2021",
            EndingDate: "12/10/2022",
            Documents: [
                <div className="d-flex justify-content-between">
                    <Link to={"/contracts-details"} style={{ color: "#000" }}><Icon icon="mingcute:pdf-fill" width={25} height={25} style={{ color: "#000", marginRight: "10px" }} />Contract1.pdf</Link>
                    <a href={pdf} download>
                        <Icon icon="fa:download" style={{ color: "#000" }} />
                    </a>
                </div>
            ],
            Status: [<button className="button Delivered">Approved</button>]

        },
        {
            ContractDetail: [<span style={{ color: "#029358" }}>Contract 1</span>, "1 year"],
            StartDate: "12/10/2021",
            EndingDate: "12/10/2022",
            Documents: [
                <div className="d-flex justify-content-between">
                    <Link to={"/contracts-details"} style={{ color: "#000" }}><Icon icon="mingcute:pdf-fill" width={25} height={25} style={{ color: "#000", marginRight: "10px" }} />Contract1.pdf</Link>
                    <a href={pdf} download>
                        <Icon icon="fa:download" style={{ color: "#000" }} />
                    </a>
                </div>
            ],
            Status: [<button className="button Closed">Declines</button>]

        },


    ];

    const columns = [
        { header: "Contract Detail", accessor: "ContractDetail" },
        { header: "Start Date", accessor: "StartDate" },
        { header: "Ending Date", accessor: "EndingDate" },
        { header: "Documents", accessor: "Documents" },
        { header: "Status", accessor: "Status" },

    ];

    return (
        <ExecutorWrapper>
            <>
                <div className="manage-Inventory">
                    <h1> Contracts</h1>
                    <p>Seller Fulfilled</p>
                    <OrderSelectorComponent />
                    <TableComponent
                        tableData={tableData}
                        itemsPerPage={4}
                        columns={columns}
                    />

                </div>
            </>
        </ExecutorWrapper>
    )
}

export default Contracts;