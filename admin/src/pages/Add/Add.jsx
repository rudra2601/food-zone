import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "burger",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "burger",
      })
      setImage(false);
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler} >
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image?URL.createObjectURL(image) : assets.upload_icon}
              alt=""
            />
          </label>
          <input
            onChange={(e)=>setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name='name'
            placeholder='Type here'
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder='Write content here'
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="burger">burger</option>
              <option value="waffles">waffles</option>
              <option value="mo-mos">mo-mos</option>
              <option value="pizza">pizza</option>
              <option value="sandwich">sandwich</option>
              <option value="cheesecake">cheesecake</option>
              <option value="noodles">noodles</option>
              <option value="fries">fries</option>
              <option value="pasta">pasta</option>
              <option value="dessert">dessert</option>
              <option value="coffee">coffee</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="₹200"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;