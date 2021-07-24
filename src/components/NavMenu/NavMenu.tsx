import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { PageName } from "../Dashboard/Dashboard";
import "./NavMenu.css";

interface Props {
  currentPageName: PageName;
  navigate: (pageName: PageName) => void;
}

export const NavMenu: FC<Props> = ({ currentPageName, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="hamburgerMenu">
      <a className="hamburgerIcon" onClick={() => setMenuOpen((o) => !o)}>
        ☰
      </a>
      {menuOpen && (
        <div className="hamburgerMenuContainer">
          {currentPageName !== "info" && (
            <a onClick={() => [navigate("info"), setMenuOpen(false)]}>
              {t("menuItem.home")}
            </a>
          )}
          {currentPageName !== "questions" && (
            <a onClick={() => [navigate("questions"), setMenuOpen(false)]}>
              {t("menuItem.faqs")}
            </a>
          )}
          {currentPageName !== "gallery" && (
            <a onClick={() => [navigate("gallery"), setMenuOpen(false)]}>
              {t("menuItem.gallery")}
            </a>
          )}
        </div>
      )}
    </div>
  );
};
