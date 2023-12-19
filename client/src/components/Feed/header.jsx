import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Box,
  Divider,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const AppBarStyled = styled(AppBar)({
  zIndex: (theme) => theme.zIndex.drawer + 1,
  backgroundColor: 'GrayText',
});

const FlexSpace = styled(Box)({
  flexGrow: 1,
  marginLeft: (theme) => theme.spacing(1), // Ajusta el margen aquí
});

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1), // Ajusta el margen aquí
  color: '#0b624f',
}));

const Header = () => {
  return (
    <AppBarStyled position="sticky">
      <Toolbar>
        <MenuButton edge="start" color="success">
          {/* Icono del menú */}
        </MenuButton>
        <Typography variant="h6" noWrap>
          Inicio
        </Typography>
        <FlexSpace>
          <SearchIcon />
          <InputBase
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'buscar' }}
          />
        </FlexSpace>
      </Toolbar>
      <Box display="flex" justifyContent="center">
        <Button color="inherit">Publicaciones</Button>
        <Divider orientation="vertical" flexItem />
        <Button color="inherit">Etiquetas</Button>
        <Divider orientation="vertical" flexItem />
        <Button color="inherit">Noticias</Button>
      </Box>
    </AppBarStyled>
  );
};

export default Header;
