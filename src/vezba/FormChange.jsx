const FormChange = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: "",
  });
  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        placeholder="name"
        onChange={handleFormChange} //react salje event objekat kada se napravi neka promena u inputu
        type="text" /////zato ne moramo da specificno naglasimo kroz arrow funkciju da saljemo event
      />
      <label htmlFor="surname">Surname: </label>
      <input
        id="surname"
        name="surname"
        placeholder="surname"
        onChange={handleFormChange}
        type="text"
      />
      <label htmlFor="age">Age: </label>
      <input
        id="age"
        name="age"
        placeholder="age"
        onChange={handleFormChange}
        type="text"
      />
      <h2>
        {form.name} {form.surname} is {form.age} years old.
      </h2>
    </div>
  );
};
export default FormChange;
