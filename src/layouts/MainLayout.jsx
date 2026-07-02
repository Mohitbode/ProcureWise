import {
  Box,
  Drawer,
  Toolbar,
  AppBar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import DashboardCards from "../components/dashboard/DashboardCards";

const drawerWidth = 260;

const menuItems = [
  "Dashboard",
  "Renewals",
  "Hardware Benchmarks",
  "Vendor Comparison",
  "Upload Quotes",
  "Reports",
  "Settings",
];

function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          background: "#ffffff",
          color: "#000",
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" fontWeight="bold">
            ProcureWise
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Typography>
            Welcome, Admin
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#1E3A8A",
            color: "#fff",
          },
        }}
      >
        <Toolbar />

        <List>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F4F7FC",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Toolbar />

        <Typography variant="h4" fontWeight="bold">
  Executive Command Center
</Typography>

<Typography sx={{ mt: 1, mb: 4, color: "gray" }}>
  Real-time procurement intelligence and spend oversight.
</Typography>

<DashboardCards />
      </Box>
    </Box>
  );
}

export default MainLayout;