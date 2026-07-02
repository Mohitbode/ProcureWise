import { Grid, Paper, Typography } from "@mui/material";

const cards = [
  {
    title: "Total Managed Spend",
    value: "$1.24B",
    color: "#1976d2",
  },
  {
    title: "Realized Savings",
    value: "$85.7M",
    color: "#2e7d32",
  },
  {
    title: "Average Savings",
    value: "14.2%",
    color: "#ed6c02",
  },
  {
    title: "Active RFQs",
    value: "242",
    color: "#9c27b0",
  },
];

export default function DashboardCards() {
  return (
    <Grid container spacing={3}>
      {cards.map((card) => (
        <Grid item xs={12} md={3} key={card.title}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography color="gray">
              {card.title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mt: 2,
                color: card.color,
              }}
            >
              {card.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}