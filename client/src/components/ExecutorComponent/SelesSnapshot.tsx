
const SelesSnapshot = () => {
    const orderData = [
        {
            heading: "Total Order Item",
            description: "0"
        },
        {
            heading: "Units Order",
            description: "0"
        },
        {
            heading: "Order Product Sales",
            description: "AED 0.00"
        },
        {
            heading: "Avg. Units Order Items",
            description: "0"
        },
        {
            heading: "Avg. Sales Order Items",
            description: "AED 0.00"
        },
    ]
    return (
        <div className="Seles-Snapshot">
            <h1>Seles Snapshot <span>taken at 5/10/2024, 9:37:06 AM PDT</span></h1>
            <hr />
            <div className="sale-snapshot-content">
                {orderData.map((item, i) => (
                    <div key={i}>
                        <p>{item.heading}</p>
                        <h6>{item.description}</h6>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default SelesSnapshot;
