import React from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>{question}</Typography>
          <Box mt={2}>
            {options.map((option, index) => (
              <Button
                key={index}
                variant="contained"
                color="primary"
                onClick={() => onAnswer(option)}
                style={{
                  display: 'block',
                  margin: '10px auto',
                  width: '80%',
                  textTransform: 'none',
                }}
              >
                {option}
              </Button>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Question;
