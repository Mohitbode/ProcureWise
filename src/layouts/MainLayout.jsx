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

import { Link, Outlet, useLocation } from "react-router-dom";

const drawerWidth = 260;

const menuItems = [
  { text: "Dashboard", path: "/" },
  { text: "Renewals", path: "/renewals" },
  { text: "Hardware Benchmark", path: "/benchmark" },
  { text: "Vendor Comparison", path: "/vendors" },
  { text: "Upload Quotes", path: "/upload" },
  { text: "Reports", path: "/reports" },
  { text: "Settings", path: "/settings" },
];

function MainLayout() {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" fontWeight="bold">
            ProcureWise
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Typography>Welcome, Admin</Typography>
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
            backgroundColor: "#1E3A8A",
            color: "#fff",
          },
        }}
      >
        <Toolbar />

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#2563EB",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "#2563EB",
                  },
                }}
              >
                <ListItemText primary={item.text} />
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
          bgcolor: "#F5F7FB",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;