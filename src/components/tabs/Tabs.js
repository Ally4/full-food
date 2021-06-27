// import React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';



// import background1 from '../img/examples/office2.jpg';
// import background2 from '../img/examples/card-blog3.jpg';
// import background3 from '../img/examples/card-project6.jpg';



// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// }));

// export default function FullWidthTabs() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="All" {...a11yProps(0)} />
//           <Tab label="Mbaza AI" {...a11yProps(1)} />
//           <Tab label="Data collection" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//         <div className="row">
//             <div className="col-md-6">
//               <div className="card card-raised card-background" style={{backgroundImage: `url(${background1})`}}>
//                 <div className="card-body">
//                   <h6 className="card-category text-info">Mbaza AI</h6>
//                     <h3 className="card-title">The Best Productivity Apps on Market</h3>
//                   <p className="card-description">
//                     Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
//                   </p>
//                   <a href="#du" className="btn btn-danger btn-round">
//                   <i className="fa fa-wrench"></i> View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="card card-raised card-background" style={{backgroundImage: `url(${background2})`}}>
//                 <div className="card-body">
//                   <h6 className="card-category text-info">Data Collection</h6>
//                   <h3 className="card-title">The Sculpture Where Details Matter</h3>
//                   <p className="card-description">
//                     Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
//                   </p>
//                   <a href="collection.html" className="btn btn-info btn-round">
//                   <i className="fa fa-wrench"></i> View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="card card-raised card-background" style={{backgroundImage: `url(${background3})`}}>
//                 <div className="card-body">
//                   <h6 className="card-category text-info">Mbaza AI</h6>
//                   <h3 className="card-title">0 to 100.000 Customers in 6 months</h3>
//                   <p className="card-description">
//                     Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
//                   </p>
//                   <a href="#du" className="btn btn-warning btn-round">
//                   <i className="fa fa-wrench"></i> View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//         <div className="row">
//             <div className="col-md-6">
//               <div className="card card-raised card-background" style={{backgroundImage: `url(${background1})`}}>
//                 <div className="card-body">
//                   <h6 className="card-category text-info">Mbaza AI</h6>
//                     <h3 className="card-title">The Best Productivity Apps on Market</h3>
//                   <p className="card-description">
//                     Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
//                   </p>
//                   <a href="#du" className="btn btn-danger btn-round">
//                   <i className="fa fa-wrench"></i> View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="card card-raised card-background" style={{backgroundImage: `url(${background2})`}}>
//                 <div className="card-body">
//                   <h6 className="card-category text-info">Data Collection</h6>
//                   <h3 className="card-title">The Sculpture Where Details Matter</h3>
//                   <p className="card-description">
//                     Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
//                   </p>
//                   <a href="collection.html" className="btn btn-info btn-round">
//                   <i className="fa fa-wrench"></i> View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="card card-raised card-background" style={{backgroundImage: `url(${background3})`}}>
//                 <div className="card-body">
//                   <h6 className="card-category text-info">Mbaza AI</h6>
//                   <h3 className="card-title">0 to 100.000 Customers in 6 months</h3>
//                   <p className="card-description">
//                     Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
//                   </p>
//                   <a href="#du" className="btn btn-warning btn-round">
//                   <i className="fa fa-wrench"></i> View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//         <div className="row">
//             <div className="col-md-6">
//               <div className="card card-raised card-background" style={{backgroundImage: `url(${background1})`}}>
//                 <div className="card-body">
//                   <h6 className="card-category text-info">Mbaza AI</h6>
//                     <h3 className="card-title">The Best Productivity Apps on Market</h3>
//                   <p className="card-description">
//                     Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
//                   </p>
//                   <a href="#du" className="btn btn-danger btn-round">
//                   <i className="fa fa-wrench"></i> View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="card card-raised card-background" style={{backgroundImage: `url(${background2})`}}>
//                 <div className="card-body">
//                   <h6 className="card-category text-info">Data Collection</h6>
//                   <h3 className="card-title">The Sculpture Where Details Matter</h3>
//                   <p className="card-description">
//                     Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
//                   </p>
//                   <a href="collection.html" className="btn btn-info btn-round">
//                   <i className="fa fa-wrench"></i> View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="card card-raised card-background" style={{backgroundImage: `url(${background3})`}}>
//                 <div className="card-body">
//                   <h6 className="card-category text-info">Mbaza AI</h6>
//                   <h3 className="card-title">0 to 100.000 Customers in 6 months</h3>
//                   <p className="card-description">
//                     Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
//                   </p>
//                   <a href="#du" className="btn btn-warning btn-round">
//                   <i className="fa fa-wrench"></i> View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//       </SwipeableViews>
//     </div>
//   );
// }






// import React from 'react';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { pillTabsStylesHook } from '@mui-treasury/styles/tabs';

// const PillTabs = () => {
//   const [tabIndex, setTabIndex] = React.useState(0);
//   const tabsStyles = pillTabsStylesHook.useTabs();
//   const tabItemStyles = pillTabsStylesHook.useTabItem();
//   return (
//     <Tabs
//       classes={tabsStyles}
//       value={tabIndex}
//       onChange={(e, index) => setTabIndex(index)}
//     >
//       <Tab classes={tabItemStyles} label={'Data'} />
//       <Tab classes={tabItemStyles} label={'Rule'} />
//       <Tab classes={tabItemStyles} label={'Indexes'} />
//       <Tab classes={tabItemStyles} label={'Usage'} />
//     </Tabs>
//   );
// };

// export default PillTabs;













import React, { Component } from 'react';
import './Tabs.css';
import Contents from './TabsContents'

export default class Tabs extends Component {

  state ={
    content: 'home', activeTab:''
  }

  handleSwitch = (tabName) => {
this.setState({content: tabName, activeTab: tabName});
  }

  // handleClick = () => {
  //   this.setState({ count : 2});
  // }

  // handleClick1 = () => {
  //   this.setState({ count : 3});
  // }



  render() {
    let contents = <Contents />;

    if(this.state.content === 'about') {
      contents = (<Contents />)
    } else if(this.state.content === 'contact') 
    {
      contents = (<Contents />)
    } else
    {
      contents = (<Contents />);
    }
    return (
      <div className="tabs">
        <div className="tabstitles">
        {/* the () => prevents the loading at once we cannot use it when we have one Onclick only */}
          <div className={`tabstitle--1 ${this.state.content === 'home' && 'active'}`} onClick={() => this.handleSwitch('home')} >HOME</div>   
          <div className={`tabstitle--2 ${this.state.content === 'about' && 'active'}`} onClick={() => this.handleSwitch('about')} >ABOUT</div>
          <div className={`tabstitle--3 ${this.state.content === 'contact' && 'active'}`} onClick={() => this.handleSwitch('contact')} >CONTACT</div>
        </div>
      
      <div>{contents}</div>



        {/* <Contents /> */}
      </div>
    )
  }
}

