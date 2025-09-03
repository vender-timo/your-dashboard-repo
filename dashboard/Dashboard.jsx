import React, { useState } from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";
import KPIs from "./KPIs";
import PerformanceTab from "./PerformanceTab";
import CAPEXTab from "./CAPEXTab";
import CarbonTab from "./CarbonTab";
import CashFlowTab from "./CashFlowTab";
import LeadsTab from "./LeadsTab";

const tabLabels = [
  "Performance",
  "CAPEX",
  "Carbon",
  "Cash Flow",
  "Leads",
];

export default function Dashboard() {
  const [tab, setTab] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabLabels.map((label, idx) => (
            <Tab label={label} key={label} />
          ))}
        </Tabs>
        <Box sx={{ mt: 3 }}>
          <KPIs />
        </Box>
        <Box sx={{ mt: 3 }}>
          {tab === 0 && <PerformanceTab />}
          {tab === 1 && <CAPEXTab />}
          {tab === 2 && <CarbonTab />}
          {tab === 3 && <CashFlowTab />}
          {tab === 4 && <LeadsTab />}
        </Box>
      </Box>
    </Container>
  );
}
