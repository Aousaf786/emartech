
const OrderDetailsWidget = () => {
    const OrderShip = [
        {
            innerData: [
                {
                    heading: "Emartech Ship By: ",
                    description: [< span style={{ color: "#029358" }}>
                        Thu, May 2, 2024, 7:54 AM PDT  </span>]
                },
                {
                    heading: "Purchase Date:",
                    description: ' Thu, May 2, 2024, 7:54 AM PDT'
                },
            ]
        },
        {
            innerData: [
                {
                    heading: "Shipping service:",
                    description: [< span style={{ color: "#029358" }}>
                        Expedited </span>]
                },
                {
                    heading: "Fulfillment: ",
                    description: 'Emartech'
                },
                {
                    heading: "Sales Channel: ",
                    description: 'Emartech'
                },
            ]
        }

    ]

    return (
        <>
            <div className="manage-Inventory">
                <h1>Order Details</h1>
                <div className="Shipment-Summary">
                    <p><h5>Order ID:   </h5> # 113-1681987-2232203 </p>
                    <p><h5>Your Seller Order ID:   </h5> # 113-1681987-2232203 </p>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-8">
                        <div className="order-summary row">
                            <h1>Order Summary</h1>
                            {OrderShip.map((item, i) => (
                                <div className="col-lg-6" key={i}>
                                    {item?.innerData?.map((items, index) => (
                                        <div className="row  mb-3" key={index}>
                                            <p className="col-lg-6">{items.heading}</p>
                                            <span className="col-lg-6">{items.description}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="order-summary ">
                            <h1>Ship To</h1>
                            <p>flat no 454, Burj khalifa, Dubai</p>
                            <p>Khadija</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OrderDetailsWidget;
