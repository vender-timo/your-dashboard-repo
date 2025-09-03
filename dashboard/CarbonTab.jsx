import React from "react";
import { Paper, Typography } from "@mui/material";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const carbonData = [
  { year: "2021", emissions: 120, intensity: 40 },
  { year: "2022", emissions: 100, intensity: 38 },
  { year: "2023", emissions: 90, intensity: 35 },
];

export default function CarbonTab() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Carbon Emissions & Intensity</Typography>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={carbonData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="emissions" stroke="#1976d2" fill="#1976d2" />
          <Area type="monotone" dataKey="intensity" stroke="#43a047" fill="#43a047" />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
}
