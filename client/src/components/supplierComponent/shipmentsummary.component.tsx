
const ShipmentSummaryComponent = () => {
    const ShipmentData = [
        {
            heading: "Shipment",
            innerData: [
                {
                    headingInner: "Created",
                    span: " Apr 4, 2024"
                },
                {
                    headingInner: "ID: ",
                    span: "17WRR2D6N"
                },
                {
                    headingInner: "Created using: ",
                    span: "Send to Emartech"
                },
                {
                    headingInner: "Emartech Reference ID:  ",
                    span: "69UZNGRT"
                },
            ]
        },
        {
            heading: "Ship From",
            innerData: [
                {
                    span: " Sara Rasheed"
                },
                {
                    span: "Box No. 214396, Deira, "
                },
                {
                    span: "Dubai",
                },

            ]
        },
        {
            heading: "Ship To",
            innerData: [
                {
                    span: "TEB9 - Box No. 216696, "
                },
                {
                    span: "Deira, Dubai "
                },
                {
                    span: "Dubai",
                },

            ]
        },
        {
            heading: "Contents",
            innerData: [
                {
                    span: "25 Units "
                },


            ]
        },
        {
            heading: "Fee (Estimated)",
            innerData: [
                {
                    headingInner: "manual processing fee: ",
                    span: "AED 0.00"
                },
                {
                    headingInner: "Total inbound placement service fees:  ",
                    span: "AAED 5.17"
                },
                {
                    headingInner: "Emartech partnered carrier cost:  ",
                    span: "AED 11.17"
                },
                {
                    headingInner: "Prep and labeling: ",
                    span: " Calculated for overall shipping plan."
                },


            ]
        }


    ]

    return (
        <>
            <div className="manage-Inventory">
                <h1>Shipment Summary</h1>
                <div className="Shipment-Summary">
                    <p><h5>Shipment Name: </h5> STA (04/02/2024 22:20)-TEB9</p>
                    <div className="status-div">
                        <span>Status:</span>
                        <button className="receiving-button">Receiving</button>
                    </div>
                    <div className="Last-updated">
                        <span>Last updated:</span>
                        {" "}
                        Apr 13, 2024
                    </div>
                </div>
                <div className="Shipment-form">
                    {ShipmentData.map((item, i) => (

                        <div className="shipment-inner">
                            <h4>{item.heading}</h4>
                            <ul>
                                {item?.innerData?.map((items, index) => (
                                    <li key={index}>{items?.headingInner}<span> {items?.span}</span></li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default ShipmentSummaryComponent;