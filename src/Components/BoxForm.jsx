import React, { useState } from "react";
const initialForm = {
  color:'',
  dim:50
}
function BoxForm({addColor}) {
  const [color, setColor] = useState(initialForm);

  const handleChange = (e) =>{
    setColor({
      ...color,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addColor(color);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-3 row">
          <label htmlFor="color" className="col-sm-2 col-form-label">
            Color
          </label>
          <div className="col-sm-8">
            <input 
              type="text" 
              name="color" 
              className="form-control" 
              onChange={handleChange}
              value={color.color}
              />
          </div>
          <div className="row">
            <label htmlFor="dim" className="col-sm-2 col-form-label">
              Dimensión
            </label>
            <div className="col-sm-8">
                <input type="text" className="form-control" name="dim" onChange={handleChange} value={color.dim} />
            </div>
          </div>
          <div className="col-sm-2">
            <input type="submit" className="btn btn-info" value="Add" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BoxForm;
