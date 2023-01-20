import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Styles from "../../styles/Menu/Menu.module.css";
import { BiPlusMedical, BiSearchAlt, BiMenu } from "react-icons/bi";
import Link from "next/link";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={Styles.nav}>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <BiMenu className={Styles.iconsMenu} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}><Link href="/connexion">Connexion</Link></MenuItem>
          <MenuItem onClick={handleClose}>A propos</MenuItem>
          <MenuItem onClick={handleClose}>contactez nous</MenuItem>
        </Menu>
      </div>

      <div className={Styles.searchbar}>
        <BiSearchAlt /> <input type="text" className={Styles.search}/>
      </div>

      <div className={Styles.logo}>
        <BiPlusMedical /> <p className={Styles.text}>Medical</p>
      </div>
    </nav>
  );
}
