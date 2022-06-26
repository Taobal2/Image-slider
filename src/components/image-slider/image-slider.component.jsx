import React, { useState } from "react";
import "./image-slider.styles.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import img from "../../assets/1.jfif";
import img2 from "../../assets/2.jfif";
import img3 from "../../assets/3.jfif";
import img4 from "../../assets/4.jfif";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(img4);
  const [page, setPage] = useState(0);
  const [picture, setPicture] = useState([img2, img3, img]);
  const [statement, setStatement] = useState([
    "London is Home",

    "She is so beautiful",

    "Life of a Photographer",
  ]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page < 0) {
      setPage(statement.length);
    } else {
      setPage(page - 1);
    }
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    const saveFile = URL.createObjectURL(file);
    setImage(saveFile);
  };

  const addToStatement = (e) => {
    console.log(e);

    setStatement([...statement, name]);
    setPicture([...picture, image]);
    setName("");
    setImage(img4);
  };

  return (
    <div className="container">
      <div className="body">
        <div className="top__section">
          <div className="imageTop__container">
            <img className="image" alt="bird-image" src={image} />
          </div>
          <div className="topSection__inputs">
            <label htmlFor="pix" className="input__label">
              Upload your image
            </label>
            <input
              id="pix"
              className="topSection__input"
              type="file"
              onChange={imageUpload}
            />
          </div>
        </div>
        <div className="middle__section">
          <input
            className="middleSection__input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="btn" onClick={addToStatement}>
            Add
          </button>
        </div>
        <div className="bottom__section">
          <div className="arrow__container">
            <BiLeftArrow className="arrow" onClick={prevPage} />{" "}
          </div>
          <div>
            <div className="statement">
              {statement[page % statement.length]}
            </div>
            <div className="imageBottom__container">
              <img
                className="image"
                src={picture[page % picture.length]}
                alt="friends-images"
              />
            </div>
          </div>

          <div className="arrow__container">
            <BiRightArrow className="arrow" onClick={nextPage} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
