import React from "react";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(0 , 0 , 0 , 0.9)", // Set background color to black
        minHeight: "100vh", // Ensure full viewport height
        paddingTop: "150px",
        marginTop: "0px", // Adjusting the top margin to position the text higher
        marginBottom: "4px",
        textAlign: "left", // Align the text to the left by default
      }}
    >
      <div
        style={{
          maxWidth: "1000px", // Set maximum width
          width: "100%", // Ensure it takes full width on larger screens
          padding: "0 20px", // Add horizontal padding for better spacing
          boxSizing: "border-box", // Include padding and border in the element's total width and height
        }}
      >
        <Typography gutterBottom variant="h3" component="div" sx={{ color: "white",  '@media screen and (max-width: 600px)': { // Media query for mobile devices
               // Adjust font size for smaller screens
              width: "100%",
              textAlign: 'center',
              
            } }}> {/* Make heading bigger and text white*/}
          ABOUT HENRY
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            fontSize: "1.2rem", 
            color: "white",
            '@media screen and (max-width: 600px)': { // Media query for mobile devices
              fontSize: "1rem", // Adjust font size for smaller screens
              width: "100%",
              textAlign: 'center',
              
            }
          }}
        > {/* Increase font size and make text white */}
          An experienced professional musician, composer and producer, Henry
          has worked with artists and songwriters including James Woodrow,
          Mike Stock (and related artists), Dylan Holloway, Db Clifford, Lisa
          Canny, Alex Phillips, Harry Marshall, Joe Slater, and many more.
          <br />
          <br />
          Within education, Henry has studied under Paul Westwood and holds a
          Masters in Contemporary Music Performance at the ICMP. Henry saw
          this Masters qualification as a chance to understand and present
          ideas within modern harmony, his final dissertation entitled 'Bebop:
          An Analysis of the Context Surrounding and some of the key Content
          Within the Innovations of Charlie Parker, Dizzy Gillespie and the
          Birth of Modern Jazz'.
        </Typography>
      </div>
    </div>
  );
}

export default About;
