import React from 'react';

function ServiceMobile({ name, Icon, info }) {
    const handleConnectEvent = () => {
        window.open(info, "_blank");
    };
    return (
        <div onClick={handleConnectEvent}>
            <Icon />
            <p>{name}</p>
        </div>
    );
}

export default ServiceMobile;
