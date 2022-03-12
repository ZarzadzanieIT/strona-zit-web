import React from "react";
import TitleText from "../components/common/TitleText";

const ManagementPage = () => {
  return (
    <a name="management" style={{ pointerEvents: "none", cursor: "default" }}>
      <div>
        <TitleText text="Zarząd koła" />
        Management page
      </div>
    </a>
  );
};

export default ManagementPage;
