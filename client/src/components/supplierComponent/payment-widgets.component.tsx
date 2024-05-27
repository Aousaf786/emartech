
const cardData = [
    {
        heading: "Available Funds",
        innerData: [
            {
                description: "Average Return Rate",
                heading: "3.51 %",
                withdrawndate: "Withdrawn to date:",
                date: "AED 289.86",
                buttonText: [< button className="withdrawn-button"> Withdraw balance</button>]
            },


        ]
    },
    {
        heading: "Future Payments",
        innerData: [
            {
                description: "Payment being cleared",
                heading: "AED 0.00"
            },
            {
                description: "Payment for active orders",
                heading: "2 Units"
            },

        ]
    },
    {
        heading: "Earnings & Expenses",
        innerData: [
            {
                description: "Earnings to date",
                heading: "AED 3050.00",
                subHeading: "Your Earning since joining"
            },
            {
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
                <h1>Manage Returns</h1>
                <div className="row">
                    {cardData.map((item, i) => (
                        <div className="col-lg-4" key={i}>
                            {item?.innerData?.map((items, index) => (
                                <div className="box-card payment-card" key={index}>
                                    <p>{items.description}</p>
                                    <h2>{items.heading}</h2>
                                    <span>{items.subHeading}</span>
                                    <p>{items.withdrawndate}</p>
                                    <p>{items.date}</p>
                                    {items.buttonText}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default PaymentWidgets;