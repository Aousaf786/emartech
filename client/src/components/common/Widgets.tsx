

import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from 'prop-types';

const WidgetCard = ({ icon, label, value, unit, additionalContent, showArrow, Image }: any) => (
    <div className="Widgets-card">
        <div className="d-flex">
            <div className="flex-shrink-0">
                {icon}
                {Image}
            </div>
            <div className="flex-grow-1 ms-3">
                <p>{label}</p>
                <h2>{value}<span>{unit}</span></h2>
            </div>
        </div>
        {additionalContent}
        {showArrow && (
            <div className="arrow-div">
                <Icon icon="lets-icons:arrow-right" style={{ color: "#000" }} width={15} height={15} />
            </div>
        )}
    </div>
);

WidgetCard.propTypes = {
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    unit: PropTypes.string,
    additionalContent: PropTypes.element,
    showArrow: PropTypes.bool,
    Image: PropTypes.element,

};

const Widgets = ({ widgetsData }: any) => (
    <div className="Widgets-content">
        <div className="row">
            {widgetsData.map((widgetGroup: any, index: any) => (
                <div className="col-lg-3" key={index}>
                    {widgetGroup.map((widget: any, innerIndex: any) => (
                        <WidgetCard
                            key={innerIndex}
                            icon={<Icon icon={widget.icon} style={{ color: widget.iconColor || "white" }} width={20} height={20} />}
                            label={widget.label}
                            value={widget.value}
                            unit={widget.unit}
                            Image={widget.Image}
                            additionalContent={widget.additionalContent}
                            showArrow={widget.showArrow}
                        />
                    ))}
                </div>
            ))}
        </div>
    </div>
);

Widgets.propTypes = {
    widgetsData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        iconColor: PropTypes.string,
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        unit: PropTypes.string,
        additionalContent: PropTypes.element,
        showArrow: PropTypes.bool,
        Image: PropTypes.element,
    }))).isRequired,
};

export default Widgets;
