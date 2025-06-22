'use client'; // Only needed for Next.js app directory

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Container,
  Divider,
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';
import { useNavigate, useLocation } from 'react-router-dom';
// import SitemarkIcon from './SitemarkIcon';
// import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navLinks = [
    { label: 'Check Transaction', path: '/check' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Reports', path: '/reports' },
    { label: 'Settings', path: '/settings' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          {/* Left: Logo + Title + Desktop Nav */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 2 }}>
            {/* Logo + Title */}
            <Box
              onClick={() => navigate('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <Box component="span" sx={{ mr: 1, fontSize: '1.25rem' }} role="img" aria-label="logo">
                🔍
              </Box>
              <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
                FraudLens
              </Box>
            </Box>

            {/* Desktop nav links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navLinks.map((item) => (
                <Button
                  key={item.label}
                  variant={isActive(item.path) ? 'contained' : 'text'}
                  color={isActive(item.path) ? 'primary' : 'info'}
                  size="small"
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Right: Theme toggle (and optional auth buttons) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {/* If you need Sign in/up, add here; otherwise just theme toggle */}
            <ColorModeIconDropdown />
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Open navigation menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <List>
                  {navLinks.map((item) => (
                    <ListItemButton
                      key={item.label}
                      selected={isActive(item.path)}
                      onClick={() => {
                        navigate(item.path);
                        setOpen(false);
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  ))}
                </List>
                <Divider sx={{ my: 2 }} />
                {/* If Sign in/up needed on mobile, add Buttons here */}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
