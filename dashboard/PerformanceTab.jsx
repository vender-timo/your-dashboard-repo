import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import MapWidget from "./MapWidget";

const revenueData = [
  { month: "Jan", budget: 100, actual: 95 },
  { month: "Feb", budget: 110, actual: 108 },
  { month: "Mar", budget: 120, actual: 118 },
  { month: "Apr", budget: 130, actual: 133 },
  { month: "May", budget: 140, actual: 135 },
  { month: "Jun", budget: 150, actual: 148 },
];

const incomeExpenseData = [
  { month: "Jan", income: 85, expense: 55 },
  { month: "Feb", income: 90, expense: 65 },
  { month: "Mar", income: 105, expense: 75 },
  { month: "Apr", income: 115, expense: 80 },
  { month: "May", income: 125, expense: 90 },
  { month: "Jun", income: 130, expense: 95 },
];

export default function PerformanceTab() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Revenue vs Budget</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="budget" stroke="#8884d8" />
              <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Income & Expense Trend</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={incomeExpenseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#1976d2" />
              <Line type="monotone" dataKey="expense" stroke="#d32f2f" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Geographic Breakdown</Typography>
          <MapWidget />
        </Paper>
      </Grid>
    </Grid>
  );
}
