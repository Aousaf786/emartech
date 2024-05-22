
import { Icon } from '@iconify/react/dist/iconify.js';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Typography } from '@mui/material';
const ShipmentPlan = () => {
    return (
        <div className="ShipmentPlan">
            <h1>ShipmentPlan</h1>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                        fontSize: "12px"

                    },
                }}
            >
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        09:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Icon icon="teenyicons:tick-circle-solid" style={{ color: "#029358" }} width={30} height={30} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ fontSize: "12px", fontWeight: "500" }}> Shipment Created

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        10:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Icon icon="teenyicons:tick-circle-solid" style={{ color: "#029358" }} width={30} height={30} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ fontSize: "12px", fontWeight: "500" }}>Intransist
                        <Typography style={{
                            color: "#029358"
                        }}>see tracking details for all inventory</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        09:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Icon icon="teenyicons:tick-circle-solid" style={{ color: "#029358" }} width={30} height={30} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ fontSize: "12px", fontWeight: "500" }}>Delivered

                        <Typography style={{
                            color: "#029358"
                        }}>Carrier tracking details</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        10:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Icon icon="teenyicons:tick-circle-solid" style={{ color: "#029358" }} width={30} height={30} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ fontSize: "12px", fontWeight: "500" }}>Checked In
                        <Typography>TEB9 - Box No. 216696, Deira, Dubai</Typography>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        10:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Icon icon="teenyicons:tick-circle-solid" style={{ color: "#029358" }} width={30} height={30} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{ fontSize: "12px", fontWeight: "500" }}>Receiving
                        <Typography>Emartech has started scanning your shipment ID labels. Received units are available for sale. Units
                            may be transfered to other fulfilment center closer to customer.</Typography>
                        <div className="question-content">
                            <h1>How long will my units take to receive?
                            </h1>
                            <p>Emartech will confirm the receipt of all units in your shipment on or before May
                                01, 2024. On or after this date, if there is any issue with your shipments, it will be
                                eligible for investigation.</p>

                            <p>
                                <span> Please note:</span> We are unable to manually expedite the shipment received
                                process, and selling partner support does not have further guidance.</p>
                        </div>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        10:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Icon icon="teenyicons:tick-circle-solid" style={{ color: "#029358" }} width={30} height={30} />

                    </TimelineSeparator>
                    <TimelineContent style={{ fontSize: "12px", fontWeight: "500" }}>Shipment Closing

                        <Typography>Your shipments will enter Closed status when Emartech has either confirm all units received in
                            your shipment against your shipped quantity or your shipment has been open for more than 360
                            days since creation, whichever is first. Emartech will continue to receive shipments that are already
                            intransist. You cannot ship additional units for a closed shipments.</Typography>

                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default ShipmentPlan;
