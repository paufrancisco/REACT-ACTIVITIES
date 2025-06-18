import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Form = ({ myDiary, handleChange }) => {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      
      {/* Header & Form Container */}
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>My Diary</h1>
        
        {/* Form */}
        <Box component="form" sx={{ width: '100%', mt: 3 }} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="username"
                label="Enter Something"
                name="username"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse', p: 1, m: 1 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              endIcon={<Icon>add</Icon>}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Diary List */}
      <List sx={{ width: '100%', maxWidth: '80ch', backgroundColor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemText primary={myDiary || 'No entry yet.'} />
        </ListItem>
      </List>
    </Container>
  );
};

export default Form;
