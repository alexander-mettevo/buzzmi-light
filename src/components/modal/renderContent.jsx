import OtherServicesModal from "./modals/otherServicesModal/OtherServicesModal.jsx";
import Report from "./modals/report/Report.jsx";

const renderContent = (name, props) => {

  const contentMap = {
    OtherServicesModal,
    Report
  }

  return (
    <>
      {!!contentMap[name] && contentMap[name](props)}
    </>
  )
   ;
}

export default renderContent;