import React from 'react';
import { AppBar, Toolbar, Tab, Tabs } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const tabStyle = {
    color: 'white',
    textTransform: 'none'
};

function downloadResume() {
    const resumeUrl = 'https://codesoft-one.vercel.app/resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'resume.pdf';
    anchor.click();
}

function NavBar() {
    return (
        <BrowserRouter>
            <div>
                <AppBar  position='static' sx={{ backgroundColor: 'rgb(2, 11, 33)', display: 'flex', boxShadow: 'none' }}>
                    <Toolbar>
                        <h3 style={{ fontSize: '2rem' }}>&lt;siddartha/&gt;</h3>
                        <Tabs>
                            <Tab label='Home' disableFocusRipple disableRipple sx={{ ...tabStyle }} component={Link} to='#home'></Tab>
                            <Tab label='Projects' disableFocusRipple disableRipple sx={{ ...tabStyle }} component={Link} to='#projects'></Tab>
                            <Tab label='Resume' disableFocusRipple disableRipple sx={{ ...tabStyle }} onClick={downloadResume}></Tab> {/* Add onClick event handler for downloading resume */}
                            <Tab label='Contact' disableFocusRipple disableRipple sx={{ ...tabStyle }} component={Link} to='#contact'></Tab>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </div>
        </BrowserRouter>
    )
}

export default NavBar;
