import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addYoutube, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import YoutubeCard from "../YoutubeCard/YoutubeCard";

const Youtube = () => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const alert = useAlert();

  const [cource, setCource] = useState("");
  const [collage, setcollage] = useState("");
  const [duration, setDuration] = useState("");
  const [discription, setDiscription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addYoutube(cource, collage, duration,discription));
    dispatch(getUser());
  };

  // const handleImage = (e) => {
  //   const file = e.target.files[0];
  //   const Reader = new FileReader();

  //   Reader.readAsDatacollage(file);

  //   Reader.onload = () => {
  //     if (Reader.readyState === 2) {
  //       setImage(Reader.result);
  //     }
  //   };
  // };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (loginMessage) {
      alert.success(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, message, dispatch, loginMessage]);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="cource"
            value={cource}
            onChange={(e) => setCource(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Enter Collage Details..."
            value={collage}
            onChange={(e) => setcollage(e.target.value)}
            className="adminPanelInputs"
          />
           <input
            type="text"
            placeholder="format - mm-yy - mm-yy"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="adminPanelInputs"
          />
           <input
            type="text"
            placeholder="Enter Some Description..."
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
            className="adminPanelInputs"
          />

          {/* <input
            type="file"
            onChange={handleImage}
            className="adminPanelFileUpload"
            accept="image/*"
          /> */}

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {user &&
            user.youtube &&
            user.youtube.map((item) => (
              <YoutubeCard
                key={item._id}
                collage={item.collage}
                cource={item.cource}
                duration={item.duration}
                discription={item.discription}
                // image={item.image.url}
                isAdmin={true}
                id={item._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Youtube;