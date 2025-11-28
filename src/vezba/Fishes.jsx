function Fishes(props) {
  return (
    <div>
      <h1>Fish name: {props.name}</h1>
      <h2>Fish age: {props.age}</h2>
      <p>
        {props.isEmployed
          ? `Fish is ${props.name} emplyed`
          : `Fish ${props.name} is not employed`}
      </p>
    </div>
  );
}

export default Fishes;
