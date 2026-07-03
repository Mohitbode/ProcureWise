import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { uploadQuotes } from "../../api/uploadApi";

function Renewals() {
  const [previousQuote, setPreviousQuote] = useState(null);
  const [currentQuote, setCurrentQuote] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCompare = async () => {
    if (!previousQuote || !currentQuote) {
      setMessage("Please select both files.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const formData = new FormData();

      formData.append("previousQuote", previousQuote);
      formData.append("currentQuote", currentQuote);

      const response = await uploadQuotes(formData);

      setMessage(response.message);
    } catch (error) {
      console.error(error);

      setMessage("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Renewal Comparison
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Upload previous and current vendor quotations to compare pricing.
      </Typography>

      {message && (
        <Alert severity="info" sx={{ mb: 3 }}>
          {message}
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Previous Quote */}

        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Previous Quote
              </Typography>

              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Choose File

                <input
                  hidden
                  type="file"
                  onChange={(e) => setPreviousQuote(e.target.files[0])}
                />
              </Button>

              <Typography sx={{ mt: 2 }}>
                {previousQuote
                  ? previousQuote.name
                  : "No file selected"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Current Quote */}

        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Quote
              </Typography>

              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Choose File

                <input
                  hidden
                  type="file"
                  onChange={(e) => setCurrentQuote(e.target.files[0])}
                />
              </Button>

              <Typography sx={{ mt: 2 }}>
                {currentQuote
                  ? currentQuote.name
                  : "No file selected"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleCompare}
          disabled={loading}
        >
          {loading ? (
            <>
              <CircularProgress
                size={20}
                sx={{ color: "#fff", mr: 1 }}
              />
              Comparing...
            </>
          ) : (
            "Compare Quotes"
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default Renewals;