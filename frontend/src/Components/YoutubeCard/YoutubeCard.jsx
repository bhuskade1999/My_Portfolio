import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteYoutube, getUser } from "../../actions/user";
import "./YoutubeCard.css";
const YoutubeCard = ({
  cource = "",
  collage = "Title Here",
  duration = "",
  discription = "",
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteYoutube(id));
    dispatch(getUser());
  };

  return (
    <div className="youtubeCard1">

      <Typography  style={{
              wordSpacing: "4px",
              lineHeight: "35px",
              letterSpacing: "3px",
              textAlign: "center",
            }} >

          <p className="headings" style={{
              wordSpacing: "4px",
              lineHeight: "35px",
              letterSpacing: "3px",
              textAlign: "center",
            }} >{cource}</p> 

          <p className ="p1" style={{
              wordSpacing: "4px",
              lineHeight: "35px",
              letterSpacing: "3px",
              textAlign: "center",
            }}> {collage} </p>

          <p className ="p2">{duration} </p>
          
          <p> {discription}  </p>

      </Typography>

      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
      )}
    </div>
  );
};

export default YoutubeCard;