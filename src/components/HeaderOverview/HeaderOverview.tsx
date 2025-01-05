import "./HeaderOverview.css";

import Tile from "../../components/Tile/Tile";

const Overview = () => {
  return (
    <div className="header-overview">
      <Tile title="Obecne Saldo:" price="$4,836.00" />
      <Tile title="Przychody:" price="$3,814.25" />
      <Tile title="Wydatki:" price="$1,700.50" />
    </div>
  );
};

export default Overview;
