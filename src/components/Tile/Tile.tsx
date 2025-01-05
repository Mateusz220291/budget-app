import "./Tile.css";

interface TileProps {
  title: string;
  price: string;
}
const Tile: React.FC<TileProps> = ({ title, price }) => {
  return (
    <div className="tile">
      <span className="tile-title">{title}</span>
      <h3 className="tile-value">{price}</h3>
    </div>
  );
};

export default Tile;
