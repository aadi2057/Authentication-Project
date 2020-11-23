import React, { useState, useEffect } from "react";
import {
  Container,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Grid,
  TextField,
} from "@material-ui/core";
import {
  Person,
  VpnKey,
  Email,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { Link, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}
interface User {
  email: String;
  password: String;
  name: String;
}

const Login: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const User: User = JSON.parse(localStorage.getItem("User") || "{}");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    if (User && User.email === email && User.password === password) {
      alert("Successful Login");
      localStorage.setItem("authenticated", true.toString());
      history.push("/profile");

      window.location.reload();
    } else {
      alert("Sorry wrong User credentials. Please try again!!");
    }
    // console.log(User.name, User.email);
    // alert(`Username: ${email} Passowrd: ${password}`);
  };

  useEffect(() => {
    const User = localStorage.getItem("User");
  });
  return (
    <div>
      <Container maxWidth="sm">
        <h1>Login Page</h1>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              fullWidth
              id="email"
              type="text"
              name="email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              fullWidth
              id="password"
              name="password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              startAdornment={
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>{" "}
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Button variant="contained" type="submit" color="secondary">
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained">Cancel</Button>
              </Grid>
            </Grid>
          </FormControl>
          <div>
            Don't have an account?{" "}
            <Link to="/register">
              <h5 style={{ display: "inline" }}>Sign Up</h5>
            </Link>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
