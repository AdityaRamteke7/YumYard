import { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import "./Add.css";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:5002";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const onSumbitHandle = async (event) => {
    event.preventDefault();
    const fromData = new FormData();
    fromData.append("name", data.name);
    fromData.append("description", data.description);
    fromData.append("price", Number(data.price));
    fromData.append("category", data.category);
    fromData.append("image", image);

    const respones = await axios.post(`${url}/api/food/add`, fromData);

    if (respones.data.success) {
      setData({ name: "", description: "", price: "", category: "Salad" });
      setImage(false);
      toast.success(respones.data.message);
    } else {
      toast.error(respones.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSumbitHandle}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload image"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name </p>
          <input
            onChange={onChangeHandle}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-desc flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandle}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandle} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price </p>
            <input
              onChange={onChangeHandle}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$20"
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
