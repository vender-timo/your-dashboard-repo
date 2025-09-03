import React from "react";
import { Paper, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const leadsData = [
  { name: "New Inquiries", value: 40 },
  { name: "Site Visits", value: 25 },
  { name: "Negotiations", value: 15 },
  { name: "Closed Deals", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function LeadsTab() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Leads Pipeline</Typography>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={leadsData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {leadsData.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
}
