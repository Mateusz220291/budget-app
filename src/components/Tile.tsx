// import "./Tile.css";

interface TileProps {
  title: string;
  price: string;
}
const Tile: React.FC<TileProps> = ({ title, price }) => {
  return (
    <div className="tile">
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Tile;
