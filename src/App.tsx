import { useState } from "react";
import {
  Container,
  Typography,
  TextareaAutosize,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="photo.jpg" style={{ margin: 20, maxWidth: "100%" }} />
          <Typography variant="h5" style={{ marginLeft: 20 }}>
            <h3>Daenerys Targaryen</h3>
            <hr />
            <h4 style={{ fontSize: 25, margin: 1 }}>Character</h4>
            <p style={{ fontSize: 16 }}>
              Daenerys Targaryen is the daughter of King Aerys II Targaryen
              (also referred to as "The Mad King") and his sister-wife Queen
              Rhaella, and is one of the last survivors of House Targaryen. She
              serves as the third-person point-of-view character of 31 chapters
              of A Game of Thrones, A Clash of Kings, A Storm of Swords, and A
              Dance with Dragons. This makes her the series' fourth most
              prominent narrative voice after Tyrion Lannister, Jon Snow and
              Arya Stark.
            </p>
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <iframe
            width="2500"
            height="250"
            src="https://www.youtube.com/embed/Ydi80YrCnPY"
            title="Game of Thrones | Official Daenerys Targaryen Trailer (HBO)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <Typography variant="h5" style={{ marginLeft: 20 }}>
            <h3>Personality</h3>
            <p style={{ fontSize: 16 }}>
              Daenerys is most often described as uncommonly beautiful, with
              long, pale silver-gold hair and purple eyes. She is slender and
              pale, although taller than some of her female ancestors. Tales of
              Daenerys's beauty are numerous, and throughout the novels she
              encounters countless suitors who seek her hand in marriage,
              sometimes to gain control of her three dragons. She is fluent in
              the Common Tongue of Westeros, Dothraki, High Valyrian and bastard
              Valyrian, which she speaks with a Tyroshi accent. Over the course
              of the first three novels she becomes fluent in the Dothraki
              language and Ghiscari, spoken in the slave cities in Essos.
            </p>
          </Typography>
        </div>
        <hr style={{ marginTop: 20 }} />
        <Typography variant="h6">Comment</Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          // defaultValue="Default Value"
          value={"What do you feel about this?"}
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              color: "white", // Change the text color here
            },
            "& .MuiInputLabel-root": {
              color: "white", // Change the label color here
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // Change the border color here
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray", // Change the border color on hover here
            },
          }}
        />
        <div
          style={{
            margin: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Rating
            precision={1}
            sx={{
              "& .MuiRating-iconEmpty": {
                borderColor: "white", // Change the border color here
              },
            }}
          />
          <div style={{ marginLeft: 10 }}>
            <Button variant="contained" color="secondary">
              Send
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
