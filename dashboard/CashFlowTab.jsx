import React from "react";
import { Paper, Typography } from "@mui/material";
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const cashFlowData = [
  { month: "Jan", inflow: 80, outflow: 60, net: 20 },
  { month: "Feb", inflow: 90, outflow: 65, net: 25 },
  { month: "Mar", inflow: 100, outflow: 70, net: 30 },
  { month: "Apr", inflow: 110, outflow: 75, net: 35 },
  { month: "May", inflow: 120, outflow: 80, net: 40 },
  { month: "Jun", inflow: 130, outflow: 85, net: 45 },
];

export default function CashFlowTab() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Cash Flow Overview</Typography>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={cashFlowData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="inflow" fill="#43a047" />
          <Bar dataKey="outflow" fill="#d32f2f" />
          <Line type="monotone" dataKey="net" stroke="#1976d2" />
        </ComposedChart>
      </ResponsiveContainer>
    </Paper>
  );
}
