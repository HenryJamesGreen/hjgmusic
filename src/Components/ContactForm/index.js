import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_4wdeyro",
        "template_n51mrkf",
        formData,
        "fvg_RcErhnk6slDnq"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            subject: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Message failed to send.");
        }
      );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensure full viewport height
        padding: "20px", // Add padding for better spacing
        marginTop: "0px", // Ignoring this for now
        marginBottom: "4px",
        ...(window.innerWidth <= 800 && {
          marginTop: "-100px"
        }),
        ...(window.innerWidth <= 500 && {
          marginTop: "-50px"
        }),
      }}
    >
      <Box sx={{ flexGrow: 1, m: 1 }}>
        <Typography
          variant="h3"
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          CONTACT HENRY
        </Typography>

        <Card
          sx={{
            maxWidth: 450,
            margin: "0 auto",
            padding: "20px 5px",
            justifyContent: "center",
            textAlign: "center",
            bgcolor: "rgba(255, 255, 255, 0.9)",
            color: "black",
          }}
        >
          <CardContent>
            <Typography gutterBotom variant="body2" component="p">
              Contact Henry at{" "}
              <a href="mailto:henryjamesgreenmusic@gmail.com">
                henryjamesgreenmusic@gmail.com
              </a>
              , or simply fill out the form below:
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    placeholder="Enter first name"
                    variant="outlined"
                    fullWidth
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
                    placeholder="Enter last name."
                    variant="outlined"
                    fullWidth
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    placeholder="Enter email."
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="subject"
                    label="Subject"
                    placeholder="Enter subject."
                    variant="outlined"
                    fullWidth
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="message"
                    multiline
                    rows={4}
                    placeholder="Type your message here."
                    variant="outlined"
                    fullWidth
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ bgcolor: "rgba(0,20,50, 0.9)" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default ContactForm;
