import './Host.scss';

function Host({ name, picture }) {
  return (
    <div className="host-info">
    <p className="host-name">{name}</p>
      <img src={picture} alt={name} className="host-picture" />
    </div>
  );
}

export default Host;
