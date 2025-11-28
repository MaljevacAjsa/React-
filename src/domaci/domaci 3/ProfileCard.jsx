function ProfileCard({ name, age, hobbies }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Godine: {age}</p>
      {hobbies.length === 0 ? (
        <p>Nema hobija</p>
      ) : hobbies.length > 3 ? (
        <p>Previše hobija</p>
      ) : (
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      )}
      {age > 30 && <p>Iskusan korisnik</p>}
    </div>
  );
}
export default ProfileCard;
