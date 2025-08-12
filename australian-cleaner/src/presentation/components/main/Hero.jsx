import { Box, Typography, Button, Stack } from '@mui/material';

function Hero() {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      py: 8, 
      px: 2,
      background: 'linear-gradient(135deg, #f9f9fa 0%, #e9ebf0 100%)',
    }}>
      <Typography variant="h1" component="h1" gutterBottom>
        The <Typography component="span" variant="h2">scalable and production-ready</Typography><br />
        Next.js SaaS starter kit
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
        Save endless hours of development time and focus on what's important for your customers with our ready-to-use Next.js SaaS boilerplate. Build and ship faster than the competition.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" size="large">
          Get supastarter for Next.js →
        </Button>
        <Button variant="outlined" size="large">
          See demo
        </Button>
      </Stack>
    </Box>
  );
}

export default Hero;
