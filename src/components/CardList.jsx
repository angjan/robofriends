import Card from "./Card.jsx";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(({ id, name, email }) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;
