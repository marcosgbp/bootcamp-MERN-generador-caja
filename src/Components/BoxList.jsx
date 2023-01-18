import React from "react";

function BoxList({ listaColor, deleteBox}) {
  return (
    <div className="box-list d-flex gap-3 mt-3">
      {listaColor.length === 0 ? (
        <p >Sin Datos</p>
      ) : (
        listaColor.map((el) => {
          let estilos = {
            background: el.color,
            width: el.dim + "px",
            height: el.dim + "px",
          };
          return (
            <>            
            <div className="border" style={estilos} key={el.id}>
              {el.color}<span role="button" onClick={()=>deleteBox(el.id)}>❌</span>
            </div>
            </>

          );
        })
      )}
    </div>
  );
}

export default BoxList;
