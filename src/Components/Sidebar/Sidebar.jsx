import React from "react";
import "./sidebar.css";
import { Button, ButtonGroup, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Navigate = useNavigate();

  return (
    <>
      <div className="sidebarcontainer">
        <div className="logo">
          <img
            src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-File.png"
            alt="admin logo"
          />
          <span>Admin </span>
        </div>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography style={{ fontSize: 17 }}>Fruits</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper className="fruitspaper">
                <button onClick={() => Navigate("/fruits/mango")}>Mango</button>
                <button onClick={() => Navigate("/fruits/apple")}>Apple</button>
                <button onClick={() => Navigate("/fruits/orange")}>
                  Orange
                </button>
              </Paper>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography style={{ fontSize: 17 }}>Cars</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper className="carspaper">
                <button onClick={() => Navigate("/cars/lamborgini")}>
                  Lamborgini
                </button>
                <button onClick={() => Navigate("/cars/bmw")}>BMW</button>
                <button onClick={() => Navigate("/cars/tata")}>Tata</button>
              </Paper>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontSize: 17 }}>Places</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper className="placespaper">
                <button onClick={() => Navigate("/places/mumbai")}>
                  Mumbai
                </button>
                <button onClick={() => Navigate("/places/pune")}>Pune</button>
                <button onClick={() => Navigate("/places/agra")}>Agra</button>
              </Paper>
            </AccordionDetails>
          </Accordion>
          <div className="placespaper">
            <button onClick={()=>Navigate("/ratings")}>Please Rate Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
