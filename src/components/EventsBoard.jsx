import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function EventsBoard() {
  const [tabIndex, setTabIndex] = useState(0);
  const timeFrames = ['today', 'this week', 'this month']

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
      <Tabs orientation="vertical" variant="scrollable" value={tabIndex}
            onChange={handleTabChange} sx={{ borderRight: 1, borderColor: 'divider' }} >
        {timeFrames.map((time, index) => (
            <Tab label={time} key={time} {...a11yProps(index)} />
        ))}
      </Tabs>
    
      {timeFrames.map((time, index)=> (
        <TabPanel value={tabIndex} index={index} key={`${time}-tab-content`}>{time}</TabPanel>
      ))}

    </Box>
  );
}

