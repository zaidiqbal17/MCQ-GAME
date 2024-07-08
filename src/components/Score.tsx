import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ScoreProps {
  score: number;
  total: number;
}

const Score: React.FC<ScoreProps> = ({ score, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '100px' }}>
        <Typography variant="h3" gutterBottom>Quiz Completed!</Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Your Score: {score}/{total}
        </Typography>
        <Box mt={4}>
          <Link to="/">
            <Button variant="contained" color="primary" size="large" style={{ marginRight: '10px' }}>
              Play Again
            </Button>
          </Link>
          <Button variant="outlined" color="secondary" size="large">
            Share Score
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Score;
