import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Overview from "./Overview";
import Edit from "./Edit";
function ManageTabs(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

ManageTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 896,
    margin: "0 auto",
  },
}));

export default function ManageTabPanel({ data }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          className="bg-primary"
          aria-label="simple tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Edit" {...a11yProps(1)} />
          <Tab label="Participants" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <ManageTabs value={value} index={0}>
        <Overview data={data} />
      </ManageTabs>
      <ManageTabs value={value} index={1}>
        <Edit data={data} />
      </ManageTabs>
      <ManageTabs value={value} index={2}>
        Participants tab
      </ManageTabs>
    </div>
  );
}
