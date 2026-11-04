import React from "react";
import { BsPin, BsClock, BsServer, BsGlobe } from "react-icons/bs";
import { useSelector } from "react-redux";

const Info = () => {
  const ip_data = useSelector((state) => state.ip_data.data);
  return (
    <section className="info-section flex">
        <div className="card">
          <h4>
            <BsGlobe /> Ip Address
          </h4>
          <h3>{ip_data.ip}</h3>
        </div>
        <div className="card">
          <h4>
            <BsPin /> Location
          </h4>
          <h3>{ip_data.location.city}<br/> {ip_data.location.region}, {ip_data.location.geonameId}</h3>
        </div>
        <div className="card">
          <h4>
            <BsClock /> Timezone
          </h4>
          <h3>UTC {ip_data.location.timezone}</h3>
        </div>
        <div className="card">
          <h4>
            <BsServer /> ISP
          </h4>
          <h3>{ip_data.isp}</h3>
        </div>
    </section>

  );
};

export default Info;
