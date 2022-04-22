import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Overview from "./Overview";
import Edit from "./Edit";
import Participants from "./Participants";
import { useRouter } from "next/router";
import Leaderboard from "./Leaderboard";

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
    "aria-controls": `manage-tournament-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 896,
    margin: "0 auto",
  },
}));

export default function ManageTabPanel({ data, id }) {
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push(`${id}/?tab=overview`);
    } else if (newValue === 1) {
      router.push(`${id}/?tab=edit`);
    } else if (newValue === 2) {
      router.push(`${id}/?tab=participants`);
    } else {
      router.push(`${id}/?tab=leaderboard`);
    }
  };

  useEffect(() => {
    const { tab } = router.query;
    switch (tab) {
      case "edit":
        setValue(1);
        break;
      case "participants":
        setValue(2);
        break;
      case "leaderboard":
        setValue(3);
        break;
      case "overview":
      default:
        setValue(0);
    }
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          className="bg-primary"
          aria-label="manage tournament tabs"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Edit" {...a11yProps(1)} />
          <Tab label="Participants" {...a11yProps(2)} />
          <Tab label="Leaderboard" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <ManageTabs value={value} index={0}>
        <Overview data={data} />
      </ManageTabs>
      <ManageTabs value={value} index={1}>
        <Edit data={data} />
      </ManageTabs>
      <ManageTabs value={value} index={2}>
        <Participants data={data} id={id} />
      </ManageTabs>
      <ManageTabs value={value} index={3}>
        <Leaderboard data={data} id={id} />
      </ManageTabs>
    </div>
  );
}
