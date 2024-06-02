import { LuLoader2 } from "react-icons/lu";

import "./loading.css";

const Loading = () => {
  return (
    <div className="loaderContainer">
      <LuLoader2 className="loadingRing" />
    </div>
  );
};

export default Loading;
