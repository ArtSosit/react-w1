
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1, fontSize: 15 }}>
      <AppBar
        position="static"
        sx={{
          mr: 2,
          backgroundColor: "#292929",
          height: "70px",
        }}
      >
        {/* Set the background color to a dark color and adjust height */}
        <Toolbar >
          <IconButton sx={{ scale: "100%" }}>
            {/* Make the IconButton larger */}
            <Avatar
              alt="Game of Thrones Icon"
              src="icon.png"
              sx={{ width: 60, height: 60 }}
            />
            {/* Make the Avatar larger */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "24px" }}
          >
            Game of Thrones
          </Typography>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">STORY</Button>
          <Button color="inherit">GALLERY</Button>
          <Button color="inherit">CHARACTERS</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
