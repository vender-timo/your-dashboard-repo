import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const KPIS = [
  {
    label: "Portfolio Health Score",
    value: "92",
    explanation: `A composite metric evaluating overall asset performance.
Formula: (Weighted Avg. NOI Growth + Lease Renewal % + Cap Rate - GHG Intensity) / 4
Higher is better.`,
  },
  {
    label: "Cap Rate",
    value: "5.2%",
    explanation: `Capitalization Rate measures property return.
Formula: Net Operating Income / Market Value
E.g., $520,000 / $10,000,000 = 5.2%`,
  },
  {
    label: "Lease Renewal %",
    value: "82%",
    explanation: `Percentage of leases renewed in period.
Formula: (Renewed Leases / Expiring Leases) × 100
E.g., 41/50 = 82%`,
  },
  {
    label: "GHG Intensity",
    value: "35 kgCO2/m²",
    explanation: `Annual greenhouse gas emissions per m².
Formula: Total CO2 Emissions / Total Floor Area
Lower is better.`,
  },
];

export default function KPIs() {
  return (
    <Grid container spacing={2}>
      {KPIS.map((kpi) => (
        <Grid item xs={12} sm={6} md={3} key={kpi.label}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">{kpi.label}</Typography>
              <Typography variant="h4">{kpi.value}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {kpi.explanation}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
