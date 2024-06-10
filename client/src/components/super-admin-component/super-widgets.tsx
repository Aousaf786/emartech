
import { Icon } from "@iconify/react/dist/iconify.js";
const widgetsData = [
    [
        {
            icon: "material-symbols:orders-outline-rounded",
            label: "Total Sales",
            value: "SAR 25,345,740",
            description: [<span style={{ color: "#029358" }}> 12.08% </span>, "+12,254 today"],
            viewSale: "View Sale"


        },

    ],
    [
        {
            icon: "material-symbols:orders-outline-rounded",
            label: "Total Sales",
            value: "28,265",
            description: [<span style={{ color: "#029358" }}> 12.08% </span>, "+12,254 today"],
            viewSale: "View Order"


        }
    ]


];
const SuperWidgets = () => {

    return (
        <div className="Widgets-content">
            <div className="row">
                {widgetsData.map((widgetGroup: any, index: any) => (
                    <div className="col-lg-4" key={index}>
                        {widgetGroup.map((widget: any, innerIndex: any) => (
                            <div className="Widgets-card" key={innerIndex}>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <Icon icon={widget.icon} style={{ color: widget.iconColor || "white" }} width={20} height={20} />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <p>{widget.label}</p>
                                        <h2>{widget.value}</h2>
                                    </div>
                                </div>
                                <p className="description">{widget.description}</p>
                                <div className="footer-card">
                                    <p>{widget.viewSale} -{">"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="col-lg-4" >

                    <div className="Widgets-card" >
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <Icon icon="material-symbols:orders-outline-rounded" style={{ color: "white" }} width={20} height={20} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p className="mb-0">Top Countries</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center pt-2 px-4">
                            <div className="flex-shrink-0 inner-field">
                                <Icon icon="material-symbols:orders-outline-rounded" style={{ color: "white" }} width={15} height={15} />
                            </div>
                            <div className="flex-grow-1 ms-3 inner-text">
                                <p className="mb-0">Saudi Arabia</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center pt-2 px-4">
                            <div className="flex-shrink-0 inner-field">
                                <Icon icon="material-symbols:orders-outline-rounded" style={{ color: "white" }} width={15} height={15} />
                            </div>
                            <div className="flex-grow-1 ms-3 inner-text">
                                <p className="mb-0">Saudi Arabia</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center py-2 px-4">
                            <div className="flex-shrink-0 inner-field">
                                <Icon icon="material-symbols:orders-outline-rounded" style={{ color: "white" }} width={15} height={15} />
                            </div>
                            <div className="flex-grow-1 ms-3 inner-text">
                                <p className="mb-0">Saudi Arabia</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default SuperWidgets;
