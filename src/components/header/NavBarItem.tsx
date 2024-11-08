import { Link as RouterLink } from "react-router-dom";
import { List, ListItem, Link, Typography } from "@mui/material";

interface NavbarItemProps {
  isSelected?: boolean;
  href?: string;
  children: string;
  onClick?: () => void;
}

export const NavbarItem = ({ isSelected, children, href }: NavbarItemProps) => {
  return (
    <Link component={RouterLink} to={href || ''} underline="none">
      <List disablePadding>
        <ListItem
          sx={{
            height: "100%",
            px: 2,
            py: 1,
            fontWeight: isSelected ? "fontWeightBold" : "fontWeightMedium",
            color: isSelected ? "#3358ff" : "text.primary",
            borderBottom: isSelected ? 2 : 0,
            borderColor: isSelected ? "#3358ff" : "transparent",
          }}
        >
          <Typography>{children}</Typography>
        </ListItem>
      </List>
    </Link>
  );
};
