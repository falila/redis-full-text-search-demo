import { useState } from "react";

const BikeForm = () => {
  const [results, setResult] = useState([]);
  const search = async (event) => {
    const query = event.target.value;

    if (query.length > 3) {
      const params = new URLSearchParams({ query });
      const res = await fetch("/api/search?" + params);
      const result = await res.json();
      if (result != undefined && result != null) {
        setResult(result.bikes);
      }
    }
  };

  return (
    <div>
      <input
        onChange={search}
        type="text"
        placeholder="search bike..."
        className="form-control"
      />

      <ul className="list-group">
        {results != undefined
          ? results.map((bike) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
                key={bike.entityId}
              >
                <img width="50px" src={bike.image} />

                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {bike.make} {bike.model}
                  </div>
                  {bike.description}
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default BikeForm;
