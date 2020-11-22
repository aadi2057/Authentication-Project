import React, { useState } from "react";
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
import { RouteComponentProps, Link } from "react-router-dom";
interface Props extends RouteComponentProps {}

const Register: React.FC<Props> = ({ history }) => {
  //   var initialState = {
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   };
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    const User = {
      name,
      email,
      password,
    };
    localStorage.setItem("User", JSON.stringify(User));
    setName("");
    setEmail("");
    setConfirmPassword("");
    setPassword("");
    history.push("/login");
  };
  return (
    <div style={{ marginTop: "15px" }}>
      <Container maxWidth="sm">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="name">Full Name</InputLabel>
            <Input
              fullWidth
              id="name"
              type="text"
              name="name"
              required={true}
              onChange={(e) => setName(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
            />
          </FormControl>
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
            {/* <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel> */}
            <TextField
              fullWidth
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              required={true}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              error={password !== confirmPassword ? true : false}
              helperText={
                password !== confirmPassword ? "Password not Matched!" : ""
              }
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Button variant="contained" type="submit" color="secondary">
                  Submit
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained">Cancel</Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>
        <div style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <Link to="/login">
            <h5 style={{ display: "inline" }}>Log In</h5>
          </Link>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Register;
