import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from './theme';
import { calculateDaysUntilBirthday } from './utils';

function App() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [daysUntilBirthday, setDaysUntilBirthday] = useState(null);

  const handleSubmit = () => {
    const days = calculateDaysUntilBirthday(birthdate);
    setDaysUntilBirthday(days);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          p={4}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Birthday Countdown
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Birthdate"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          >
            Calculate
          </Button>
          {daysUntilBirthday !== null && (
            <Typography variant="h6" component="p" marginTop="16px">
              {name}, your next birthday is in {daysUntilBirthday} days!
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
