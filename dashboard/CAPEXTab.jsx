import React from "react";
import { Paper, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const capexData = [
  { year: "2021", planned: 500, actual: 450 },
  { year: "2022", planned: 600, actual: 580 },
  { year: "2023", planned: 650, actual: 630 },
];

export default function CAPEXTab() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">CAPEX Planned vs Actual</Typography>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={capexData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="planned" fill="#8884d8" />
          <Bar dataKey="actual" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}
