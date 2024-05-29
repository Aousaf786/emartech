
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import { useState } from 'react';
import { SearchComponent } from '../inputs/search';
const TabsComponent = ({ tabItems }: any) => {
    const [value, setValue] = React.useState('1');
    const [showTable, setShowTable] = useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const handleSearch = (query: any) => {
        setShowTable(true);
    };
    return (
        <div >
            <div className='w-50 d-flex justify-content-end' style={{ marginLeft: "auto" }}>
                <SearchComponent onSearch={handleSearch} />
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {tabItems.map((tab: any) => (
                                <Tab key={tab.value} label={tab.label} value={tab.value} />
                            ))}
                        </TabList>
                    </Box>
                    {tabItems.map((tab: any) => (
                        <TabPanel key={tab.value} value={tab.value}>
                            {tab.component}
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>
        </div>
    )
}

export default TabsComponent;
