
const ChainData = [
    {
        heading: "Granted Claims Summary",
        innerData: [
            {
                description: "Claims Value granted by Emartech: ",
                span: "0.0"
            },
            {
                description: "Granted claim % : ",
                span: "0%"
            },
            {
                description: "Claim granted : ",
                span: " 0 of 0"
            },
        ]
    },
    {
        heading: "Top 3 Claim Denial Reasons",
        innerData: [
            {
                description: "Claims Value granted by Emartech: ",
                span: "0.0"
            },
            {
                description: "Granted claim % : ",
                span: "0%"
            },
            {
                description: "Claim granted : ",
                span: " 0 of 0"
            },
        ]
    },
    {
        heading: "Top 3 Product with Claims",
        innerData: [
            {
                description: "Claims Value granted by Emartech: ",
                span: "0.0"
            },
            {
                description: "Granted claim % : ",
                span: "0%"
            },
            {
                description: "Claim granted : ",
                span: " 0 of 0"
            },
        ]
    },
]
const ViewGrantedClaims = () => {
    return (
        <div className="view-granted-claims">
            <div className="row">
                {ChainData.map((item, i) => (
                    <div className="col-lg-4">
                        <div className="view-granted-claims-card">
                            <h3>{item.heading}</h3>
                            {item?.innerData?.map((items, index) => (
                                <p key={index}>{items?.description} <span>{items?.span}</span></p>
                            ))}
                            <div className="footer-card">
                                <span>View Granted Claims</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewGrantedClaims;