import FrontPage from "./FrontPage";
import BackPage from "./BackPage";
import useDeviceSize from "../../hooks/useDeviceSize";

const CreditCard = () => {
  const isMobile = useDeviceSize();
  return isMobile ? (
    <div>
      <div className="translate-x-[50px]">
        <BackPage />
      </div>
      <div className=" -translate-y-[125px]">
        <FrontPage />
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-6">
      <FrontPage />
      <div className="translate-x-[50px]">
        <BackPage />
      </div>
    </div>
  );
};

export default CreditCard;
