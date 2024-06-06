import { Avatar, Divider, Fab, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from "@mui/material";

import { Icon } from "@iconify/react/dist/iconify.js";
import { SupplierWrapper } from "./supplierWrapper";

const ChatBox = () => {
    return (
        <SupplierWrapper>
            <>
                <div className="chat-box">

                    <Grid container component={Paper} sx={{ width: '100%', height: '85vh' }}>
                        <Grid item xs={3} sx={{ borderRight: '1px solid #e0e0e0', padding: "10px" }}>
                            <Grid container>
                                <Grid item xs={12} >
                                    <Typography variant="h5" sx={{ padding: "10px" }}>New Messages</Typography>
                                </Grid>
                            </Grid>
                            <List>
                                <ListItem button key="RemySharp">
                                    <ListItemIcon>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                    </ListItemIcon>
                                    <ListItemText primary="John Wick"></ListItemText>
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button key="RemySharp">
                                    <ListItemIcon>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                    </ListItemIcon>
                                    <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                                    <ListItemText secondary="online" align="right"></ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button key="Alice">
                                    <ListItemIcon>
                                        <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                                    </ListItemIcon>
                                    <ListItemText primary="Alice">Alice</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button key="CindyBaker">
                                    <ListItemIcon>
                                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                    </ListItemIcon>
                                    <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                                </ListItem>
                                <Divider />
                            </List>
                        </Grid>
                        <Grid item xs={9}>
                            <List sx={{ height: '70vh', overflowY: 'auto' }}>
                                <ListItem key="1" style={{ textAlign: "end" }}>
                                    <Grid container sx={{ padding: '20px', justifyContent: 'end' }}>
                                        <Grid item xs={12} >
                                            <ListItemText className="recevied-message" align="right" primary="Hey man, What's up ?"></ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText className="span" align="right" secondary="09:30"></ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem key="2">
                                    <Grid container sx={{ padding: '20px', justifyContent: 'flex-start' }}>
                                        <Grid item xs={12}>
                                            <ListItemText className="sent-message" align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText align="left" secondary="09:31"></ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </List>
                            <Grid container sx={{ padding: '20px', justifyContent: 'flex-start' }}>
                                <Grid item xs={11}>
                                    <TextField id="outlined-basic-email" className="input-field" label="Type Something" fullWidth />
                                </Grid>
                                <Grid xs={1} align="right">
                                    <Fab color="primary" aria-label="add">
                                        {/* I replaced the Iconify icon with a simple send icon */}
                                        <Icon icon="material-symbols:send" width={30} height={30} />
                                    </Fab>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </>
        </SupplierWrapper>
    )
}

export default ChatBox;
