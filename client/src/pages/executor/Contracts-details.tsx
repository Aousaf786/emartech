import ContractsDetailsComponent from "@/components/ExecutorComponent/contracts-details-component";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../../components/supplierStyle.scss";
import { ExecutorWrapper } from "./executorWrapper";


const ContractsDetails = () => {
    const tableData = [
        {
            ContractDetail: [<span style={{ color: "#029358" }}>Contract 1</span>, "1 year"],
            StartDate: "12/10/2021",
            EndingDate: "12/10/2022",
            Documents: [
                <div className="d-flex justify-content-between">
                    <p><Icon icon="mingcute:pdf-fill" style={{ color: "#000", marginRight: "10px" }} />Contract1.pdf</p>
                    <Icon icon="fa:download" style={{ color: "#000" }} />
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
                    <p><Icon icon="mingcute:pdf-fill" style={{ color: "#000", marginRight: "10px" }} />Contract1.pdf</p>
                    <Icon icon="fa:download" style={{ color: "#000" }} />
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
                    <p><Icon icon="mingcute:pdf-fill" style={{ color: "#000", marginRight: "10px" }} />Contract1.pdf</p>
                    <Icon icon="fa:download" style={{ color: "#000" }} />
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
                    <h1> Contracts Details</h1>
                    <p>General Information</p>
                    <ContractsDetailsComponent />

                </div>
            </>
        </ExecutorWrapper>
    )
}

export default ContractsDetails;