import useInput from "../../hooks/useInput";
import ProductContext from "../../contexts/ProductContext"
import {useContext} from 'react'

const Form = () => {
  const productName = useInput("");
  const productPrice = useInput("");
  
  const context = useContext(ProductContext)
  return (
      <>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Producto
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={productName.val}
          onChange={productName.onChange}
        />
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Precio
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={productPrice.val}
          onChange={productPrice.onChange}
          />
          <button className="btn btn-danger" type="button" onClick={() => context.addProduct(productName.val,productPrice.val)}>Agregar</button>
          </div>
    </>
  );
};

export default Form;
