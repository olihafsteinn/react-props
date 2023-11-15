import React, { useState } from "react";
import CardImage from "../images/700w.jpg";

type Props = {
  pic: string;
  category: string;
  text: string;
};

const Card = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverScale = "scale(1.02)";
  const notHover = "scale(1)";

  const CardStyle: React.CSSProperties = {
    backgroundColor: "#F5F5F5",
    borderRadius: "1rem",
    maxWidth: "300px",
    minHeight: "390px",
    margin: ".5rem",
    padding: "1rem",
    border: "1px solid #E9E9E9",
    boxShadow: "0px 2px 3px 0px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transform: isHovered ? hoverScale : notHover,
    transition: "0.4s ease",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const ImageStyle: React.CSSProperties = {
    borderRadius: ".5rem",
    width: "300px",
    height: "200px",
    objectFit: "cover",
  };

  const CardAlignment: React.CSSProperties = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    gap: ".8rem",
  };

  const TextStyle: React.CSSProperties = {
    color: "black",
    margin: 0,
    marginTop: "auto",
    fontSize: "22px"
  };

  const BtnStyle: React.CSSProperties = {
    backgroundColor: "#FF7733",
    borderRadius: ".5rem",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "0.1rem",
    height: "2rem",
    maxWidth: "110px",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div
      style={CardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={CardAlignment}>
        <img src={props.pic} style={ImageStyle} alt="" />
        <button style={BtnStyle}>{props.category}</button>
        <h3 style={TextStyle}>{props.text}</h3>
      </div>
    </div>
  );
};

export default Card;
