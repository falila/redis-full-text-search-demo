export default function CreateMotoBikeForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());


    const res = await fetch("/api/motoBike", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();

  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="make" className="form-label">
        Make
      </label>
      <input name="make" type="text" className="form-control" />

      <label htmlFor="model" className="form-label">
        Model
      </label>
      <input name="model" type="text" className="form-control" />

      <label htmlFor="image" className="form-label">
        Image
      </label>
      <input name="image" type="text" className="form-control" />

      <label htmlFor="description" className="form-label">
        Description
      </label>
      <textarea name="description" type="text" className="form-control" />

      <button className="btn btn-primary" type="submit" style={{marginTop:30}}>
        Create MotoBike
      </button>
    </form>
  );
}
