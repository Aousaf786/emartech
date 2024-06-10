import ProjectComponent from "@/components/ExecutorComponent/projectComponent";
import TableComponent from "@/components/supplierComponent/table.component";
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import "../../components/supplierStyle.scss";
import { ExecutorWrapper } from "./executorWrapper";


const Projects = () => {
    const tableData = [
        {
            ProjectName: [<Link to={"/executor-project-details"} style={{ color: "#000" }}>
                Fix Price Project
                <span>Client A</span>
            </Link>],
            DueDate: "12/10/2021",

            Income: [
                <div className="d-flex justify-content-between">
                    <div>
                        AED 5400.00
                        <span>AED 11,700.00</span>
                    </div>
                    <div>64,15%</div>
                </div>
            ],
            Progress: [<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="inherit" />
            </Stack>],
            Labourcost: [
                <div className="d-flex justify-content-between">
                    AED 5400.00
                    <div>64,15%</div>
                </div>
            ],
            ProjectProfit: ["AED 1320.00 (24.44%)", <span>AED 4900.00 (41.88%)</span>],
            Status: [<button className="button Delivered">In progress</button>]
        },
    ];

    const columns = [
        { header: ["Project Name", <span>Client Name</span>], accessor: "ProjectName" },
        { header: "Due Date", accessor: "DueDate" },
        { header: "Income", accessor: "Income" },
        { header: "Progress", accessor: "Progress" },
        { header: "Labour cost", accessor: "Labourcost" },
        { header: "Project Profit", accessor: "ProjectProfit" },
        { header: "Status", accessor: "Status" },
    ];

    return (
        <ExecutorWrapper>
            <>
                <div className="manage-Inventory">
                    <h1> Projects</h1>
                    <p>Seller Fulfilled</p>
                    <ProjectComponent />
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

export default Projects;