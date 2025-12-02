import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./PostList.css";
import Chip from "@mui/material/Chip";
import { AppContext } from "../App";
import { useContext } from "react";

function PostList({ postList }) {
  dayjs.extend(relativeTime);

  const { setTag_id } = useContext(AppContext);

  const handleClick = (id) => {
    setTag_id(id);
    return;
  };

  return (
    <>
      <ImageList sx={{ width: "100%" }} cols={3}>
        <ImageListItem key="Subheader" cols={3}></ImageListItem>
        {postList.map((item) => (
          <ImageListItem key={item.id}>
            <div>
              {item.tag_names.map((tag_name, index) => {
                return (
                  <Chip
                    label={tag_name.name}
                    variant="outlined"
                    onClick={() => handleClick(tag_name.id)}
                    key={index}
                    id={`postTag${tag_name.id}`}
                  />
                );
              })}
            </div>
            <img
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imgage}?w=248&fit=crop&auto=format`}
              alt={item.comment}
              loading="lazy"
              key={item.id}
            />
            <ImageListItemBar
              title={item.comment}
              subtitle={`@${item.user_name}  #${dayjs(new Date(item.created_at).toUTCString()).fromNow()}`}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.comment}`}
                >
                  <img src={item.user_icon} style={{ height: 50 }} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default PostList;
