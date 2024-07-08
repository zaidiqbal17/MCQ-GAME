import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '100px' }}>
      <Box
        component="img"
        sx={{
          height: 150,
          width: 150,
          marginBottom: '20px',
        }}
        alt="Logo"
        src="https://i2.wp.com/maroonersrock.com/wp-content/uploads/2017/11/Its-Quiz-Time-Logo.png?fit=1024%2C1024"

      />
      <Typography variant="h2" gutterBottom>MCQ Game</Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Test your knowledge with our fun and interactive quiz!
      </Typography>
      <Link to="/game">
        <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
          Start Game
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
