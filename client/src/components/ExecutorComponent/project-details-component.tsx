import { Icon } from '@iconify/react/dist/iconify.js';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import * as React from 'react';
import pdf from "../../assets/images/HTML_CSS_interview_question_.pdf";
const information = [
    {
        heading: "Project Name",
        description: "Fix Price Project"
    },
    {
        heading: "Client Name",
        description: "Client 4"
    },

]
const PaymentInformation = [

    {
        heading: "status",
        description: false,
        button: [<button className="button">Processing</button>]
    },
    {
        heading: "Due Date",
        description: "10/02/2024",
        button: false
    },
    {
        heading: "Income",
        description: "AED 50,000",
        button: false
    },
    {
        heading: "Project Profit",
        description: "AED 5,000",
        button: false
    },
    {
        heading: "Labour Cost",
        description: "AED 4080.00",
        button: false
    },
]
function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (

        <Box sx={{ width: '100%', mr: 1, display: 'flex', alignItems: 'center', gap: "10px", marginTop: "10px" }}>
            <span>Progress</span>
            <div style={{ width: "100%" }}>
                <LinearProgress variant="determinate" {...props} />
            </div>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
            )}%`}</Typography>
        </Box>

    );
}
const ProjectDetailsComponent = () => {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, [])
    return (
        <div className="contracts-details-component">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {information.map((item, i) => (
                            <div className="col-lg-6 mt-3" key={i}>
                                <h6>{item.heading}</h6>
                                <p>{item.description}</p>

                            </div>
                        ))}
                    </div>
                    <h6>Description</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    <div className="row">
                        {PaymentInformation.map((item, index) => (
                            <div className="col-lg-6 mt-3" key={index}>
                                <h6>{item.heading}</h6>
                                <p>{item.description}</p>
                                {item.button}
                            </div>
                        ))}
                    </div>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgressWithLabel value={progress} />
                    </Box>
                </div>
                <div className="col-lg-4">
                    <h6>Attachements</h6>
                    <div className="Attachements-content">
                        <div className="d-flex justify-content-between">

                            <p className='mb-0'><Icon icon="mingcute:pdf-fill" width={25} height={25} style={{ color: "#000", marginRight: "10px" }} />Contract1.pdf </p>
                            <a href={pdf} download>
                                <Icon icon="fa:download" style={{ color: "#000" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProjectDetailsComponent;