import profile from "../../assets/images/profile-img.svg";
const information = [
    {
        heading: "Contractor Name",
        description: "Contract for  Construction a Buildong"
    },
    {
        heading: "Company",
        description: "Emartech Construction Company"
    },
    {
        heading: "Started Date",
        description: "12/05/2024"
    },
]
const PaymentInformation = [
    {
        heading: "Type",
        description: "MileStone",
        button: false
    },
    {
        heading: "No of Milestone",
        description: "10",
        button: false
    },
    {
        heading: "Payment status",
        description: false,
        button: [<button className="button">Processing</button>]
    },
    {
        heading: "Last Payment",
        description: "10/02/2024",
        button: false
    },
    {
        heading: "Total Amount",
        description: "AED 50,000",
        button: false
    },
    {
        heading: "Each Milestone",
        description: "AED 5,000",
        button: false
    },
]
const ContractsDetailsComponent = () => {
    return (
        <div className="contracts-details-component">
            <div className="d-flex mt-5">
                <div className="flex-shrink-0">
                    <img src={profile} alt="profile" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h6>Ahmed</h6>
                    <p>ahmed@gmail.com</p>
                </div>
            </div>
            <div className="row">
                {information.map((item, i) => (
                    <div className="col-lg-6 mt-5" key={i}>
                        <h6>{item.heading}</h6>
                        <p>{item.description}</p>

                    </div>
                ))}
            </div>
            <hr />
            <h1>Payment Information</h1>
            <div className="row">
                {PaymentInformation.map((item, index) => (
                    <div className="col-lg-6 mt-5" key={index}>
                        <h6>{item.heading}</h6>
                        <p>{item.description}</p>
                        {item.button}
                    </div>
                ))}
            </div>
            <hr />
            <div className="d-flex justify-content-end mt-4 gap-3">
                <button className="button Declines">Declines</button>
                <button className="button Approved">Approved</button>
            </div>
        </div>
    )
}

export default ContractsDetailsComponent;