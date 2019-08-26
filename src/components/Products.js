import React from "react";
import "./Products.css";
import { Sort } from "./Sort";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";

export function Products(props) {
  return (
    <div className="products-container">
      <Sort
        handleLTHSort={props.handleLTHSort}
        handleHTLSort={props.handleHTLSort}
      />
      <div>
        <Pagination
          totalPages={props.totalPages}
          currPage={props.currPage}
          handleGoToPage={props.handleGoToPage}
        />
      </div>
      <ul className="products">
        {props.products.map(product => {
          return (
            <li key={product.uniqueId} className="product-overview">
              <Link
                to={`/product/${product.uniqueId}`}
                className="product-overview-detail link"
              >
                <img src={product.productImage} alt={product.name} />

                {product.name.toUpperCase()}
              </Link>
              <p className="product-overview-detail">{product.listPrice}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <Pagination
          totalPages={props.totalPages}
          currPage={props.currPage}
          handleGoToPage={props.handleGoToPage}
        />
      </div>
    </div>
  );
}
