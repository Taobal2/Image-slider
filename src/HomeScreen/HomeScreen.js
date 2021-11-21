import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Input, Button } from "antd";
import "./HomeScreen.css";
import TextArea from "antd/lib/input/TextArea";
import image1 from "./Image/1.jfif";
import image2 from "./Image/2.jfif";
import image3 from "./Image/2.jfif";
import image4 from "./Image/4.jfif";

const HomeScreen = () => {
  const [statement1, setStatement1] = useState([
    "She is so beautiful",
    "London is Home",
    "Life of a Photographer",
  ]);
  const [name, setName] = useState("");
  const [image, setImage] = useState(image4);
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(0);
  const [picture, setPicture] = useState([image1, image2, image3]);

  const nextState = () => {
    setPage(page + 1);
  };

  const prevState = () => {
    if (page < 0) {
      setPage(statement1.length);
    } else {
      setPage(page - 1);
    }
  };

  const addStatement = () => {
    const file = {
      name,
      email,
    };
    setStatement1([...statement1, name]);
    setName("");
    setPicture([...picture, image]);
  };

  const upload = (e) => {
    const file = e.target.files[0];
    const saveImage = URL.createObjectURL(file);
    setImage(saveImage);
  };

  return (
    <div className="container">
      <div className="container_top">
        <img className="container_display" src={image} />
        <div className="container_label">
          <label htmlFor="pix">upload your image</label>
        </div>
        <div className="container_input">
          <Input type="file" id="pix" onChange={upload} />
        </div>
      </div>
      <div className="input">
        <Input
          placeHolder="Enter your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          placeHolder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          className="inputButton"
          type="primary"
          danger
          onClick={() => {
            console.log(name, email);
            addStatement();
          }}
        >
          Add
        </Button>
      </div>
      <div className="container1">
        <div className="button">
          <BiLeftArrow onClick={prevState} />
        </div>

        <div>
          <div>{statement1[page % statement1.length]}</div>
          <img className="img" src={picture[page % picture.length]} />
        </div>
        <div className="button">
          <BiRightArrow onClick={nextState} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
