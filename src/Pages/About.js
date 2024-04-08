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
    padding: "150px", // Add padding to all sides
    textAlign: "center", // Align the text to the center
    
  }}
>

      <div
        sx={{
          maxWidth: "1000px", // Set maximum width
          width: "100%", // Ensure it takes full width on larger screens
          padding: "0 0px", // Add horizontal padding for better spacing
          boxSizing: "border-box", // Include padding and border in the element's total width and height
          '@media (max-width:800px)': {
          marginTop: "100px"
      
          },
        
        }}
      >
        <Typography gutterBottom variant="h3" component="div" sx={{ color: "white" , '@media (max-width: 700px)' : {marginTop: "-100px"}  }}>
          ABOUT HENRY
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            fontSize: "1.2rem", 
            color: "white",
            '@media (max-width:800px)': {
              marginLeft: "-80px",
              marginRight: "-80px"
          
              },
          }}
        >
          An experienced professional musician, composer and producer, Henry
          has worked with artists and songwriters including James Woodrow,
          Mike Stock (and related artists), The Fizz (formerely Bucks Fizz), Dylan and The Moon, Db Clifford, Lisa
          Canny, Harry Marshall, Joe Slater, and many more.
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
