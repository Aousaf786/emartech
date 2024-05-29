import { Icon } from "@iconify/react/dist/iconify.js";
import notificationimage from "../../assets/images/notification-img.svg";
const ProjectNotification = [
    {
        icon: <Icon icon="mingcute:time-fill" style={{ color: "#fff" }} />,
        heading: "To Do Projects",
        description: "1 Project",
        className: "to-do-text"
    },
    {
        icon: <Icon icon="material-symbols:refresh" style={{ color: "#fff" }} />,
        heading: "In Progress Projects",
        description: "1 Project",
        className: "Progress-text"
    },
    {
        icon: <Icon icon="teenyicons:tick-circle-solid" style={{ color: "#fff" }} />,
        heading: "TCompleted Projects",
        description: "1 Project",
        className: "Completed-text"
    },
]
const recentNotification = [
    {
        icon: <Icon icon="radix-icons:cross-circled" style={{ color: "#fff" }} />,
        description: "Your notification request is rejected.",
        className: "to-do-text"
    },
    {
        icon: <Icon icon="teenyicons:tick-circle-solid" style={{ color: "#fff" }} />,
        description: "Two task are in progress.",
        className: "Progress-text"
    },
    {
        icon: <Icon icon="mingcute:time-fill" style={{ color: "#fff" }} />,
        description: "You have schedule meeting tomorrow at 3pm.",
        className: "Completed-text"
    },
]
const messageNotification = [
    {
        icon: <img src={notificationimage} alt="" />,
        description: "Baag",
        heading: "ahmed"

    },
    {
        icon: <img src={notificationimage} alt="" />,
        heading: "ahemd",
        description: "Two task are in progress.",

    },
    {
        icon: <img src={notificationimage} alt="" />,
        description: "You have schedule meeting tomorrow at 3pm.",
        heading: "ahemd",

    },
]

const NotifcationComponent = () => {
    return (
        <div className="executor-component">
            <div className="Project-notification">
                <h2>Project</h2>
                <div className="notification-scroll">
                    {ProjectNotification.map((item, i) => (
                        <div className="d-flex mt-3 " key={i}>
                            <div className={`flex-shrink-0 ${item.className}`}>
                                {item.icon}
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h2>{item.heading}</h2>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Project-notification">
                <h2 className="mt-4">Recent Notifications</h2>
                <div className="notification-scroll">

                    {recentNotification.map((item, i) => (
                        <div className="d-flex mt-3 " key={i}>
                            <div className={`flex-shrink-0 ${item.className}`}>
                                {item.icon}
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Project-notification mt-3">
                <h2>Recent Messages</h2>
                <div className="notification-scroll">
                    {messageNotification.map((item, i) => (
                        <div className="d-flex mt-3" key={i} style={{ borderBottom: '1px solid #B4ABABA8' }}>
                            <div className="flex-shrink-0">
                                {item.icon}
                            </div>
                            <div className="flex-grow-1  ms-3 d-flex justify-content-between">
                                <div>
                                    <h3>{item.heading}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <span>Today, 12.11pm</span>
                                    <div className="notification-number">
                                        1
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">

                <button className="see-message-button">See All Messages</button>
            </div>
        </div>
    )
}

export default NotifcationComponent;
