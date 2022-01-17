import React from "react";
import camisetaTitular from "../../media/camiseta.jpg";
import ItemCount from "../ItemCount";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="contenedor">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <img src={camisetaTitular} alt="camisetatitular" />
            <div className="card-body">
              <h4 className="card-title text-primary"> {greeting} </h4>
              <p className="card-text text-secondary">
                {" "}

              </p>
                            <ItemCount stock ={5} initial ={1}/>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;

