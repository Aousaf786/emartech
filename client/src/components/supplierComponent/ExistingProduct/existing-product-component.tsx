import image from "../../../assets/images/Rectangle4777.svg";

const ExistingProductComponent = () => {
    return (
        <div className="Table-Dtail">
            <div className="inner-content">
                <img src={image} alt="img not found" />
                <div>
                    <p>Signature Acrylic Colours – 100 gm</p>
                    <p>EAN: <span>A37001BBA</span></p>
                    <p>Sales Rank: <span>122</span></p>
                    <p>Offers: <span>1 Used & New</span></p>
                    <p className="mb-0">Competing Marketplace Offers:</p>
                    <span>1 New  from AED 35.00+ AED 0.00 shipping</span>
                </div>
            </div>
        </div>
    )
}

export default ExistingProductComponent;
