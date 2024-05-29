
const cardData = [
    {
        heading: "Available Funds",
        innerData: [
            {
                subHeading: false,
                description: "Average Return Rate",
                heading: "3.51 %",
                withdrawndate: [<p className="mt-2">Withdrawn to date:</p>],
                date: [<p>AED 289.86</p>],
                buttonText: [< button className="withdrawn-button"> Withdraw balance</button>]
            },


        ]
    },
    {
        heading: "Future Payments",
        innerData: [
            {
                withdrawndate: false,
                subHeading: false,
                date: false,
                buttonText: false,
                description: "Payment being cleared",
                heading: "AED 0.00"
            },
            {
                withdrawndate: false,
                subHeading: false,
                date: false,
                buttonText: false,
                description: "Payment for active orders",
                heading: "2 Units"
            },

        ]
    },
    {
        heading: "Earnings & Expenses",
        innerData: [
            {
                withdrawndate: false,
                date: false,
                buttonText: false,
                description: "Earnings to date",
                heading: "AED 3050.00",
                subHeading: "Your Earning since joining"
            },
            {
                withdrawndate: false,
                date: false,
                buttonText: false,
                description: "Expense to date",
                heading: "AED 250.00",
                subHeading: "Earning spent on purchase to joining"
            },
        ]
    }

]

const PaymentWidgets = () => {


    return (
        <>
            <div className="manage-Inventory">
                <h1>Payments Dashboard</h1>
                <div className="row">
                    {cardData.map((item, i) => (
                        <div className="col-lg-4" key={i}>
                            <h6 className="card-header">{item.heading}</h6>
                            {item?.innerData?.map((items, index) => (
                                <>
                                    <div className="box-card payment-card" key={index}>
                                        <p>{items.description}</p>
                                        <h2>{items.heading}</h2>
                                        <span>{items.subHeading}</span>
                                        {items.withdrawndate}
                                        {items.date}
                                        {items.buttonText}
                                    </div>
                                </>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default PaymentWidgets;