import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';

interface MenuProps {
  onExit: () => void;
}

const MenuComponent: React.FC<MenuProps> = ({ onExit }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        メニュー
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onExit}>終了</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuComponent;