/* @ds-bundle: {"format":4,"namespace":"KeenaiDesignSystem_019e06","components":[{"name":"Button","sourcePath":"ui_kits/keenai-web/Button.jsx"},{"name":"Card","sourcePath":"ui_kits/keenai-web/Card.jsx"},{"name":"Dashboard","sourcePath":"ui_kits/keenai-web/Dashboard.jsx"},{"name":"DashboardSidebar","sourcePath":"ui_kits/keenai-web/DashboardSidebar.jsx"},{"name":"Data","sourcePath":"ui_kits/keenai-web/Data.jsx"},{"name":"Divider","sourcePath":"ui_kits/keenai-web/Divider.jsx"},{"name":"Footer","sourcePath":"ui_kits/keenai-web/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/keenai-web/Hero.jsx"},{"name":"Icon","sourcePath":"ui_kits/keenai-web/Icon.jsx"},{"name":"Label","sourcePath":"ui_kits/keenai-web/Label.jsx"},{"name":"NavBar","sourcePath":"ui_kits/keenai-web/NavBar.jsx"},{"name":"Pillars","sourcePath":"ui_kits/keenai-web/Pillars.jsx"},{"name":"PortfolioOverview","sourcePath":"ui_kits/keenai-web/PortfolioOverview.jsx"},{"name":"Tag","sourcePath":"ui_kits/keenai-web/Tag.jsx"},{"name":"Wordmark","sourcePath":"ui_kits/keenai-web/Wordmark.jsx"}],"sourceHashes":{"email-signature/signatures.jsx":"a18c17b2ff59","ui_kits/keenai-web/Button.jsx":"d522a1fd285e","ui_kits/keenai-web/Card.jsx":"2e2544209843","ui_kits/keenai-web/Dashboard.jsx":"b971a0b491d2","ui_kits/keenai-web/DashboardSidebar.jsx":"b6d943ee219c","ui_kits/keenai-web/Data.jsx":"af24b995d42f","ui_kits/keenai-web/Divider.jsx":"1582921566ce","ui_kits/keenai-web/Footer.jsx":"0583323e93f1","ui_kits/keenai-web/Hero.jsx":"cef59ce0c756","ui_kits/keenai-web/Icon.jsx":"564535cb7519","ui_kits/keenai-web/Label.jsx":"057752f0b523","ui_kits/keenai-web/NavBar.jsx":"7419ea484c3c","ui_kits/keenai-web/Pillars.jsx":"0557ccc35630","ui_kits/keenai-web/PortfolioOverview.jsx":"96baa279aa69","ui_kits/keenai-web/Tag.jsx":"7442cc923872","ui_kits/keenai-web/Wordmark.jsx":"e95e4f8c392e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KeenaiDesignSystem_019e06 = window.KeenaiDesignSystem_019e06 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// email-signature/signatures.jsx
try { (() => {
/* global React, ReactDOM, DesignCanvas, DCSection, DCArtboard */
const {
  useRef,
  useState
} = React;

/* ---------------------------------------------------------------------
   Brand tokens (locked to email-safe inline CSS — clients drop most
   stylesheets, so every rule must live on the element).
   ------------------------------------------------------------------- */
const C = {
  navy: "#011526",
  ember: "#EA4F05",
  crimson: "#B72A06",
  burgundy: "#430D17",
  warmWhite: "#FFFBF9",
  black: "#000000",
  white: "#FFFFFF",
  fgMuted: "rgba(0,0,0,0.60)",
  fgSubtle: "rgba(0,0,0,0.40)",
  border: "rgba(0,0,0,0.10)",
  borderOnDark: "rgba(255,255,255,0.18)",
  fgOnDarkMuted: "rgba(255,255,255,0.60)"
};
const FONT_UI = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
// Display tier — same family as UI (Inter only, May 2026). Kept as a named
// constant so the editorial-weight callsites (wordmark, person-name in v1/v3)
// still read clearly; weight + tracking carry the hierarchy, not the family.
const FONT_DISPLAY = FONT_UI;
const FEAT_DATA = '"ss02","tnum","lnum","cv11"';

/* ---------------------------------------------------------------------
   Sample person — same across all variants so they're directly
   comparable. (Cribbed names; swap to your real details on use.)
   ------------------------------------------------------------------- */
const PERSON = {
  name: "Anaya Krishnan",
  role: "Senior Wealth Advisor",
  team: "Private Client · NRI Desk",
  email: "anaya.krishnan@keenai.com",
  phoneIN: "+91 22 4890 1200",
  phoneSG: "+65 6817 0420",
  city: "Mumbai · Singapore",
  web: "keenai.com",
  calendar: "cal.keenai.com/anaya",
  pronoun: "she/her",
  reconciled: "07 May 2026, 11:24 IST"
};

/* ---------------------------------------------------------------------
   Reusable label / divider primitives — inline-styled so we can hand
   the same JSX to dangerouslySetInnerHTML and ship it as raw email HTML.
   ------------------------------------------------------------------- */
const eyebrowStyle = {
  fontFamily: FONT_UI,
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.10em",
  textTransform: "uppercase",
  color: C.fgMuted,
  lineHeight: 1
};
const dividerVRule = /*#__PURE__*/React.createElement("td", {
  style: {
    width: "1px",
    background: C.border,
    padding: 0
  }
});

/* ---------------------------------------------------------------------
   The Keenai wordmark — inline SVG so it renders without external assets.
   Sized for ~28px target height. The full SVG is heavy; we use a
   simplified type-set wordmark + the brand diamond accent.
   ------------------------------------------------------------------- */
function Wordmark({
  color = C.black,
  height = 22
}) {
  // Width follows the official wordmark aspect ratio (440/138 ≈ 3.19:1, post May-2026 re-crop)
  const width = Math.round(height * 3.19);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontSize: `${height}px`,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color,
      fontWeight: 400,
      whiteSpace: "nowrap",
      display: "inline-block"
    }
  }, "keenai");
}

/* The diamond accent that sits next to the wordmark in the brand book */
function Diamond({
  color = C.ember,
  size = 8
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: `${size}px`,
      height: `${size}px`,
      background: color,
      transform: "rotate(45deg)",
      marginLeft: "8px",
      verticalAlign: "middle"
    }
  });
}

/* ====================================================================
   VARIANT 1 — "Editorial column"
   Single-column. Wordmark on top, name in Inter Medium with tight tracking,
   role + contact stacked. Most restrained — closest to brand voice.
   ================================================================== */
function VariantEditorial() {
  return /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    style: {
      borderCollapse: "collapse",
      fontFamily: FONT_UI,
      color: C.black,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      paddingBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontSize: "20px",
      color: C.black,
      letterSpacing: "-0.01em",
      lineHeight: 1
    }
  }, "keenai"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: "6px",
      height: "6px",
      background: C.ember,
      transform: "rotate(45deg)",
      marginLeft: "8px",
      verticalAlign: "middle"
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: 1.1,
      color: C.black,
      letterSpacing: "-0.02em",
      paddingBottom: "2px"
    }
  }, PERSON.name)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "13px",
      fontWeight: 500,
      color: C.black,
      letterSpacing: "-0.005em",
      paddingBottom: "1px"
    }
  }, PERSON.role)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.fgMuted,
      letterSpacing: "0",
      paddingBottom: "16px"
    }
  }, PERSON.team)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.black,
      letterSpacing: "0",
      paddingBottom: "3px",
      fontFeatureSettings: FEAT_DATA
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PERSON.email}`,
    style: {
      color: C.black,
      textDecoration: "none",
      borderBottom: `1px solid ${C.border}`
    }
  }, PERSON.email), "  ·  ", /*#__PURE__*/React.createElement("span", null, PERSON.phoneIN))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.fgMuted,
      paddingBottom: "16px",
      fontFeatureSettings: FEAT_DATA
    }
  }, PERSON.city)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "10px",
      fontWeight: 600,
      letterSpacing: "0.10em",
      textTransform: "uppercase",
      color: C.fgMuted,
      paddingTop: "12px",
      borderTop: `1px solid ${C.border}`,
      width: "360px"
    }
  }, "From complexity to clarity."))));
}

/* ====================================================================
   VARIANT 2 — "KPI Card"
   Riffs on the dashboard tile pattern: hairline border, 2px Auric Ember
   bottom-rule, name as the "value", role/team as the "label" line.
   Two-column on the right with structured contact data.
   ================================================================== */
function VariantKPI() {
  return /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    style: {
      borderCollapse: "collapse",
      fontFamily: FONT_UI,
      color: C.black,
      border: `1px solid ${C.border}`,
      borderBottom: `2px solid ${C.ember}`,
      background: C.white
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "20px 24px 20px 20px",
      verticalAlign: "top",
      width: "260px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      marginBottom: "10px"
    }
  }, "Wealth Advisor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_UI,
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: C.black,
      marginBottom: "6px"
    }
  }, PERSON.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.fgMuted,
      letterSpacing: 0,
      lineHeight: 1.4
    }
  }, PERSON.role, /*#__PURE__*/React.createElement("br", null), PERSON.team)), dividerVRule, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "20px 20px 20px 20px",
      verticalAlign: "top"
    }
  }, /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    style: {
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      ...eyebrowStyle,
      paddingBottom: "4px",
      paddingRight: "24px"
    }
  }, "Email"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...eyebrowStyle,
      paddingBottom: "4px"
    }
  }, "Direct")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.black,
      paddingBottom: "12px",
      paddingRight: "24px",
      fontFeatureSettings: FEAT_DATA
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PERSON.email}`,
    style: {
      color: C.black,
      textDecoration: "none"
    }
  }, PERSON.email)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.black,
      paddingBottom: "12px",
      fontFeatureSettings: FEAT_DATA
    }
  }, PERSON.phoneIN)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      ...eyebrowStyle,
      paddingBottom: "4px"
    }
  }, "Singapore"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...eyebrowStyle,
      paddingBottom: "4px"
    }
  }, "Schedule")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.black,
      fontFeatureSettings: FEAT_DATA
    }
  }, PERSON.phoneSG), /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.black
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `https://${PERSON.calendar}`,
    style: {
      color: C.ember,
      textDecoration: "none"
    }
  }, PERSON.calendar)))))))));
}

/* ====================================================================
   VARIANT 3 — "Dark premium"
   Deep Navy surface — for client-facing advisors who want the editorial
   weight of Keenai's premium digital pieces. Wordmark white, ember pip.
   ================================================================== */
function VariantDark() {
  return /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    style: {
      borderCollapse: "collapse",
      background: C.navy,
      fontFamily: FONT_UI
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "24px 28px"
    }
  }, /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    style: {
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      paddingBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontSize: "20px",
      color: C.warmWhite,
      letterSpacing: "-0.01em",
      lineHeight: 1
    }
  }, "keenai"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: "6px",
      height: "6px",
      background: C.ember,
      transform: "rotate(45deg)",
      marginLeft: "8px",
      verticalAlign: "middle"
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: 1.1,
      color: C.warmWhite,
      letterSpacing: "-0.02em",
      paddingBottom: "2px"
    }
  }, PERSON.name)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      fontWeight: 500,
      color: C.warmWhite,
      letterSpacing: "-0.005em",
      paddingBottom: "1px"
    }
  }, PERSON.role)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "11px",
      color: C.fgOnDarkMuted,
      paddingBottom: "18px"
    }
  }, PERSON.team)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      borderTop: `1px solid ${C.borderOnDark}`,
      paddingTop: "14px"
    }
  }, /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.10em",
      textTransform: "uppercase",
      color: C.fgOnDarkMuted,
      paddingRight: "24px",
      paddingBottom: "3px"
    }
  }, "Direct"), /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.10em",
      textTransform: "uppercase",
      color: C.fgOnDarkMuted,
      paddingBottom: "3px"
    }
  }, "Email")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.warmWhite,
      paddingRight: "24px",
      fontFeatureSettings: FEAT_DATA
    }
  }, PERSON.phoneIN), /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.warmWhite,
      fontFeatureSettings: FEAT_DATA
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PERSON.email}`,
    style: {
      color: C.warmWhite,
      textDecoration: "none"
    }
  }, PERSON.email))))))))))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      height: "3px",
      background: C.ember,
      padding: 0,
      lineHeight: 0,
      fontSize: 0
    }
  }, "\xA0"))));
}

/* ====================================================================
   VARIANT 4 — "Reconciled"
   Treats the signature like a financial statement footer.
   Eyebrow → name → role → "Last reconciled" timestamp in tabular nums.
   Most product-native, leans on the data-language of the dashboard.
   ================================================================== */
function VariantReconciled() {
  return /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    style: {
      borderCollapse: "collapse",
      fontFamily: FONT_UI,
      color: C.black
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      paddingBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontSize: "18px",
      color: C.black,
      letterSpacing: "-0.01em"
    }
  }, "keenai"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: "6px",
      height: "6px",
      background: C.ember,
      transform: "rotate(45deg)",
      marginLeft: "8px",
      verticalAlign: "middle"
    }
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      paddingBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      ...eyebrowStyle,
      paddingBottom: "6px"
    }
  }, "Advisor")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: C.black,
      paddingBottom: "2px"
    }
  }, PERSON.name)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.fgMuted,
      paddingBottom: "0"
    }
  }, PERSON.role, " \xB7 ", PERSON.team)))))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      borderTop: `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`,
      padding: "10px 0"
    }
  }, /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    style: {
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, [["Email", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PERSON.email}`,
    style: {
      color: C.black,
      textDecoration: "none"
    }
  }, PERSON.email)], ["Direct (IN)", PERSON.phoneIN], ["Direct (SG)", PERSON.phoneSG], ["Schedule", /*#__PURE__*/React.createElement("a", {
    href: `https://${PERSON.calendar}`,
    style: {
      color: C.ember,
      textDecoration: "none"
    }
  }, PERSON.calendar)]].map(([k, v], i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...eyebrowStyle,
      padding: "4px 32px 4px 0",
      verticalAlign: "middle",
      whiteSpace: "nowrap"
    }
  }, k), /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.black,
      padding: "4px 0",
      fontFeatureSettings: FEAT_DATA,
      letterSpacing: "-0.005em"
    }
  }, v))))))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      paddingTop: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      color: C.fgSubtle
    }
  }, "Last reconciled"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "11px",
      color: C.fgMuted,
      marginLeft: "8px",
      fontFeatureSettings: FEAT_DATA
    }
  }, PERSON.reconciled)))));
}

/* ====================================================================
   VARIANT 5 — "Compact rule"
   Tightest footprint. Single row: wordmark · name · contact, separated
   by hairline rules. For high-frequency replies where vertical space is
   precious. Still strict tokens — just collapsed.
   ================================================================== */
function VariantCompact() {
  const cellPad = "0 18px";
  return /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    style: {
      borderCollapse: "collapse",
      fontFamily: FONT_UI,
      color: C.black,
      borderTop: `1px solid ${C.border}`,
      borderBottom: `2px solid ${C.ember}`
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 18px 14px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontSize: "20px",
      color: C.black,
      letterSpacing: "-0.01em"
    }
  }, "keenai"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: "5px",
      height: "5px",
      background: C.ember,
      transform: "rotate(45deg)",
      marginLeft: "8px",
      verticalAlign: "middle"
    }
  })), dividerVRule, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: cellPad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_UI,
      fontWeight: 600,
      fontSize: "13px",
      color: C.black,
      letterSpacing: "-0.005em",
      marginBottom: "2px"
    }
  }, PERSON.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "11px",
      color: C.fgMuted
    }
  }, PERSON.role)), dividerVRule, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: cellPad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      marginBottom: "3px"
    }
  }, "Direct"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.black,
      fontFeatureSettings: FEAT_DATA
    }
  }, PERSON.phoneIN)), dividerVRule, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: cellPad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      marginBottom: "3px"
    }
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: C.black,
      fontFeatureSettings: FEAT_DATA
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PERSON.email}`,
    style: {
      color: C.black,
      textDecoration: "none"
    }
  }, PERSON.email))))));
}

/* ---------------------------------------------------------------------
   Helper — extract the rendered HTML of an artboard's signature so users
   can copy the email-safe markup. We render to a hidden div and read
   .innerHTML; clipboard.writeText pushes it.
   ------------------------------------------------------------------- */
function HtmlCopy({
  children
}) {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);
  const grab = () => {
    if (!ref.current) return "";
    return ref.current.innerHTML
    // strip React-only data attributes that crept in
    .replace(/ data-reactroot=""/g, "");
  };
  const onCopy = async e => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(grab());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.warn("clipboard failed", err);
    }
  };
  return /*#__PURE__*/React.createElement("details", {
    className: "html-copy"
  }, /*#__PURE__*/React.createElement("summary", null, "Copy-ready HTML", /*#__PURE__*/React.createElement("button", {
    className: "copy-btn",
    onClick: onCopy
  }, copied ? "Copied" : "Copy")), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: "none"
    }
  }, children), /*#__PURE__*/React.createElement("pre", null, `<!-- Paste into Gmail / Outlook / Apple Mail signature settings -->\n` + (typeof window !== "undefined" ? "" : "")), /*#__PURE__*/React.createElement(PreFiller, {
    targetRef: ref
  }));
}
function PreFiller({
  targetRef
}) {
  const [html, setHtml] = useState("…");
  React.useEffect(() => {
    if (!targetRef.current) return;
    const out = targetRef.current.innerHTML.replace(/ data-reactroot=""/g, "")
    // pretty: linebreak before each <table / <tr / </table / </tr
    .replace(/></g, ">\n<");
    setHtml(out);
  }, [targetRef]);
  // We need to overwrite the existing <pre>; instead, render our own.
  return /*#__PURE__*/React.createElement("pre", {
    style: {
      display: "none"
    },
    "data-html": html,
    ref: el => {
      // Find the sibling pre in DOM and write into it
      if (!el) return;
      const parent = el.parentElement;
      if (!parent) return;
      const pre = parent.querySelector("pre:not([data-html])");
      if (pre) pre.textContent = html;
    }
  });
}

/* ---------------------------------------------------------------------
   Artboard wrapper — surface + caption + copy panel.
   ------------------------------------------------------------------- */
function SigInner({
  dark,
  name,
  desc,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? C.navy : C.warmWhite,
      padding: "40px",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "sig-caption",
    style: {
      color: dark ? C.warmWhite : C.black
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "name",
    style: {
      fontFamily: FONT_UI,
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: "-0.005em",
      color: dark ? C.warmWhite : C.black
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "desc",
    style: {
      fontFamily: FONT_UI,
      fontSize: "12px",
      color: dark ? C.fgOnDarkMuted : C.fgMuted,
      lineHeight: 1.5,
      maxWidth: "60ch"
    }
  }, desc)));
}

/* ---------------------------------------------------------------------
   Top-level layout
   ------------------------------------------------------------------- */
function App() {
  return /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement(DCSection, {
    id: "sigs",
    title: "Signatures",
    description: "All variants share the same person and contact data so you can compare composition only."
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "v1-editorial",
    label: "01 \xB7 Editorial column",
    width: 520,
    height: 420
  }, /*#__PURE__*/React.createElement(SigInner, {
    name: "Editorial column",
    desc: "Single-column, name set in Inter Medium with tight tracking. The most restrained \u2014 closest to brand voice. Best for client correspondence and senior advisors."
  }, /*#__PURE__*/React.createElement(VariantEditorial, null))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "v2-kpi",
    label: "02 \xB7 KPI card",
    width: 680,
    height: 420
  }, /*#__PURE__*/React.createElement(SigInner, {
    name: "KPI card",
    desc: "Riffs on the dashboard tile pattern \u2014 hairline border, 2px Auric Ember bottom-rule, contact data laid out in a labelled grid."
  }, /*#__PURE__*/React.createElement(VariantKPI, null))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "v3-dark",
    label: "03 \xB7 Dark premium",
    width: 520,
    height: 460
  }, /*#__PURE__*/React.createElement(SigInner, {
    dark: true,
    name: "Dark premium",
    desc: "Deep Navy surface \u2014 for client-facing moments where you want the editorial weight of the premium digital pieces."
  }, /*#__PURE__*/React.createElement(VariantDark, null))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "v4-reconciled",
    label: "04 \xB7 Reconciled",
    width: 520,
    height: 500
  }, /*#__PURE__*/React.createElement(SigInner, {
    name: "Reconciled",
    desc: "Treats the signature like a statement footer \u2014 labelled rows of tabular data plus a 'Last reconciled' timestamp. Most product-native."
  }, /*#__PURE__*/React.createElement(VariantReconciled, null))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "v5-compact",
    label: "05 \xB7 Compact rule",
    width: 760,
    height: 300
  }, /*#__PURE__*/React.createElement(SigInner, {
    name: "Compact rule",
    desc: "Tightest footprint \u2014 a single row separated by hairlines, ember bottom-rule. For high-frequency replies where vertical space matters."
  }, /*#__PURE__*/React.createElement(VariantCompact, null)))));
}
const root = ReactDOM.createRoot(document.getElementById("canvas"));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "email-signature/signatures.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Keenai UI Kit — Button
function Button({
  variant = "primary",
  size = "md",
  onDark = false,
  children,
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-ui)",
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    border: 0,
    borderRadius: 0,
    cursor: "pointer",
    lineHeight: 1,
    transition: "background .15s ease, color .15s ease, border-color .15s ease",
    fontSize: size === "sm" ? 12 : 14,
    padding: size === "sm" ? "10px 16px" : "16px 24px"
  };
  const styles = {
    primary: {
      background: "#EA4F05",
      color: "#011526"
    },
    // WCAG AA: navy on ember = 4.99:1 (was white = 3.75:1)
    secondary: onDark ? {
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.5)"
    } // 0.4→0.5 for AA non-text 3:1
    : {
      background: "transparent",
      color: "#000",
      border: "1px solid #000"
    },
    ghost: onDark ? {
      background: "transparent",
      color: "#fff"
    } : {
      background: "transparent",
      color: "#000"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      ...base,
      ...styles[variant],
      ...(rest.style || {})
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Card.jsx
try { (() => {
// Keenai UI Kit — Card / surface
function Card({
  tone = "light",
  accent = false,
  children,
  style = {}
}) {
  const bg = tone === "dark" ? "#011526" : "#fff";
  const fg = tone === "dark" ? "#fff" : "#000";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: fg,
      padding: 24,
      borderRadius: 0,
      borderBottom: accent ? "2px solid #EA4F05" : `1px solid ${tone === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Data.jsx
try { (() => {
// Keenai UI Kit — tabular data text
function Data({
  children,
  size = 32,
  weight = 500,
  onDark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontFeatureSettings: '"ss02","tnum","lnum"',
      fontVariantNumeric: "tabular-nums lining-nums",
      fontSize: size,
      fontWeight: weight,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: onDark ? "#fff" : "#000",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Data });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Divider.jsx
try { (() => {
// Keenai UI Kit — Divider
function Divider({
  onDark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: onDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Divider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Icon.jsx
try { (() => {
// Keenai UI Kit — Icon (single-stroke 1.5px, 24x24 grid)
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 1.5
}) {
  const paths = {
    "arrow-up-right": /*#__PURE__*/React.createElement("path", {
      d: "M7 17 17 7M9 7h8v8"
    }),
    "arrow-right": /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14m-6-6 6 6-6 6"
    }),
    "chevron-down": /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }),
    "chevron-right": /*#__PURE__*/React.createElement("path", {
      d: "m9 6 6 6-6 6"
    }),
    "lock": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "11",
      width: "14",
      height: "9",
      rx: "0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 11V8a4 4 0 1 1 8 0v3"
    })),
    "globe": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
    })),
    "shield": /*#__PURE__*/React.createElement("path", {
      d: "M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"
    }),
    "sparkle": /*#__PURE__*/React.createElement("path", {
      d: "M12 4v6m0 4v6m-8-8h6m4 0h6"
    }),
    "search": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m20 20-3.5-3.5"
    })),
    "bell": /*#__PURE__*/React.createElement("path", {
      d: "M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5L6 16Zm4 4h4"
    }),
    "user": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 20a7 7 0 0 1 14 0"
    })),
    "menu": /*#__PURE__*/React.createElement("path", {
      d: "M4 7h16M4 12h16M4 17h16"
    }),
    "plus": /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }),
    "trend-up": /*#__PURE__*/React.createElement("path", {
      d: "m3 17 6-6 4 4 8-8m0 0h-5m5 0v5"
    }),
    "circle": /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }),
    "x": /*#__PURE__*/React.createElement("path", {
      d: "M6 6 18 18M18 6 6 18"
    }),
    "calendar": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "16",
      height: "16",
      rx: "0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 10h16M9 3v4M15 3v4"
    })),
    "download": /*#__PURE__*/React.createElement("path", {
      d: "M12 4v12m0 0-4-4m4 4 4-4M5 20h14"
    }),
    "dot": /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2.5",
      fill: color,
      stroke: "none"
    })
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    style: {
      display: "block",
      flexShrink: 0
    }
  }, paths[name] || null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Label.jsx
try { (() => {
// Keenai UI Kit — Label
function Label({
  children,
  onDark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: onDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.68)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Label.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Hero.jsx
try { (() => {
// Keenai web — marketing hero

function Hero({
  onCTA
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#011526",
      color: "#fff",
      padding: "96px 48px 128px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(40% 60% at 95% 90%, rgba(234,79,5,0.14), transparent 70%), radial-gradient(45% 55% at 5% 95%, rgba(67,13,23,0.5), transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 80,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    onDark: true
  }, "Wealth-tech \xB7 For the global Indian"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 104,
      lineHeight: 0.95,
      letterSpacing: "-0.035em",
      margin: 0,
      color: "#fff"
    }
  }, "From complexity", /*#__PURE__*/React.createElement("br", null), "to ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "#EA4F05",
      fontStyle: "normal"
    }
  }, "clarity.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 18,
      lineHeight: 1.55,
      letterSpacing: "-0.011em",
      color: "rgba(255,255,255,0.85)",
      maxWidth: "52ch",
      margin: 0
    }
  }, "Institutional-grade portfolios, structured products, and private credit \u2014 calibrated to your mandate, advised by a partner who knows your context."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onCTA
  }, "Open an account"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onDark: true
  }, "Speak to advisor"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.10)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    onDark: true
  }, "Composite returns \xB7 5y"), /*#__PURE__*/React.createElement("span", {
    className: "k-data",
    style: {
      fontFamily: "var(--font-ui)",
      fontFeatureSettings: '"ss02","tnum"',
      fontSize: 12,
      color: "rgba(255,255,255,0.7)",
      letterSpacing: ".04em"
    }
  }, "NET OF FEES")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Data, {
    onDark: true,
    size: 72,
    weight: 500,
    style: {
      fontFamily: "var(--font-display)",
      letterSpacing: "-0.025em"
    }
  }, "11.4%"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#EA4F05",
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      fontFeatureSettings: '"ss02","tnum"'
    }
  }, "\u25B2 2.6% vs benchmark")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 100",
    style: {
      width: "100%",
      height: 100
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 80 C 40 75, 70 70, 100 60 S 160 50, 200 40 S 280 30, 340 18 L 400 10",
    fill: "none",
    stroke: "#EA4F05",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 80 C 40 75, 70 70, 100 60 S 160 50, 200 40 S 280 30, 340 18 L 400 10 L 400 100 L 0 100 Z",
    fill: "url(#g)",
    opacity: "0.3"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "g",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#EA4F05",
    stopOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#EA4F05",
    stopOpacity: "0"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16,
      paddingTop: 16,
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    onDark: true
  }, "AUM"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Data, {
    onDark: true,
    size: 20,
    weight: 500
  }, "$2.4B")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    onDark: true
  }, "Mandates"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Data, {
    onDark: true,
    size: 20,
    weight: 500
  }, "1,820")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    onDark: true
  }, "Geographies"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Data, {
    onDark: true,
    size: 20,
    weight: 500
  }, "14"))))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Pillars.jsx
try { (() => {
// Keenai web — four-pillar row
function Pillars() {
  const items = [{
    num: "01",
    title: "Aggregation",
    body: "Onshore + offshore holdings unified. Currency-aware net-worth across NRE, NRO, FCNR, USD & GBP brokerage, real estate."
  }, {
    num: "02",
    title: "Advisory",
    body: "A dedicated wealth advisor — not a queue. Calibrated to your mandate, your jurisdiction, your timeline."
  }, {
    num: "03",
    title: "Decision",
    body: "Every recommendation traceable to thesis, risk, and tax position. Decisions, not signals."
  }, {
    num: "04",
    title: "Experience",
    body: "Reporting, statements, and signing — the way premium products feel. Discreet by default."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#FFFBF9",
      padding: "96px 48px",
      color: "#000"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      marginBottom: 64,
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 64,
      lineHeight: 1.05,
      letterSpacing: "-0.025em",
      margin: 0,
      maxWidth: "16ch"
    }
  }, "Built on four ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "#EA4F05",
      fontStyle: "normal"
    }
  }, "quiet"), " certainties."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "-0.011em",
      color: "rgba(0,0,0,0.7)",
      maxWidth: "42ch",
      margin: 0
    }
  }, "We benchmark Keenai against premium lifestyle products \u2014 not legacy banks. Discretion, certainty, and care, codified into every interface.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 0,
      borderTop: "1px solid rgba(0,0,0,0.12)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.num,
    style: {
      padding: "32px 24px 32px 0",
      borderRight: "1px solid rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontFeatureSettings: '"ss02","tnum","lnum"',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: ".1em",
      color: "#B72A06"
    }
  }, it.num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      lineHeight: 1.55,
      letterSpacing: "-0.011em",
      color: "rgba(0,0,0,0.75)",
      margin: 0
    }
  }, it.body))))));
}
Object.assign(__ds_scope, { Pillars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Pillars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/PortfolioOverview.jsx
try { (() => {
// Keenai web — authenticated portfolio overview

function PortfolioOverview() {
  const [range, setRange] = React.useState("YTD");
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      background: "#FFFBF9",
      color: "#000",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 32px",
      borderBottom: "1px solid rgba(0,0,0,0.08)",
      background: "#FFFBF9"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      color: "rgba(0,0,0,0.68)",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "Portfolio"), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#000"
    }
  }, "Overview")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18,
    color: "rgba(0,0,0,0.68)"
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 18,
    color: "rgba(0,0,0,0.68)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 24,
      background: "rgba(0,0,0,0.12)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, "Add Capital"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 32px 24px",
      display: "flex",
      alignItems: "end",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, null, "Net Worth \xB7 USD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 88,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 0.95,
      fontFeatureSettings: '"ss02","tnum","lnum"'
    }
  }, "$1,248,510"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontFeatureSettings: '"ss02","tnum"',
      fontSize: 18,
      color: "#B72A06",
      fontWeight: 600
    }
  }, "\u25B2 +1.97%")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "rgba(0,0,0,0.68)",
      letterSpacing: "-0.005em"
    }
  }, "Last reconciled 14 May 2026, 09:42 GMT \xB7 Across 6 institutions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 0,
      border: "1px solid rgba(0,0,0,0.12)"
    }
  }, ["1M", "3M", "YTD", "1Y", "5Y", "All"].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setRange(r),
    style: {
      padding: "10px 16px",
      background: range === r ? "#000" : "transparent",
      color: range === r ? "#fff" : "rgba(0,0,0,0.75)",
      border: 0,
      borderRadius: 0,
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      cursor: "pointer",
      fontFeatureSettings: '"ss02","tnum"'
    }
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid rgba(0,0,0,0.08)",
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 220",
    style: {
      width: "100%",
      height: 220
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "dashg",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#EA4F05",
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#EA4F05",
    stopOpacity: "0"
  }))), [40, 80, 120, 160].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    y1: y,
    x2: "800",
    y2: y,
    stroke: "rgba(0,0,0,0.06)",
    strokeDasharray: "2 4"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M0 180 C 60 175, 100 165, 160 150 S 260 130, 320 145 S 420 110, 480 95 S 580 75, 640 65 S 720 50, 800 30",
    fill: "none",
    stroke: "#EA4F05",
    strokeWidth: "1.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 180 C 60 175, 100 165, 160 150 S 260 130, 320 145 S 420 110, 480 95 S 580 75, 640 65 S 720 50, 800 30 L 800 220 L 0 220 Z",
    fill: "url(#dashg)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "640",
    y1: "0",
    x2: "640",
    y2: "220",
    stroke: "rgba(0,0,0,0.4)",
    strokeDasharray: "3 3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "640",
    cy: "65",
    r: "4",
    fill: "#000"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6,1fr)",
      marginTop: 12,
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontFeatureSettings: '"ss02","tnum"',
      color: "rgba(0,0,0,0.62)",
      letterSpacing: ".04em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Jan"), /*#__PURE__*/React.createElement("span", null, "Feb"), /*#__PURE__*/React.createElement("span", null, "Mar"), /*#__PURE__*/React.createElement("span", null, "Apr"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#000",
      fontWeight: 600
    }
  }, "May"), /*#__PURE__*/React.createElement("span", null, "Jun")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 32px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, [{
    lbl: "Liquid",
    val: "$612,400",
    sub: "49% of total",
    delta: "+2.1%"
  }, {
    lbl: "Fixed Income",
    val: "$381,212",
    sub: "31% of total",
    delta: "+0.4%"
  }, {
    lbl: "Alternatives",
    val: "$154,889",
    sub: "12% of total",
    delta: "+5.2%"
  }, {
    lbl: "Cash & Equiv.",
    val: "$100,008",
    sub: "8% of total",
    delta: "—"
  }].map(t => /*#__PURE__*/React.createElement("div", {
    key: t.lbl,
    style: {
      background: "#fff",
      padding: 20,
      borderBottom: "2px solid #EA4F05",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, null, t.lbl), /*#__PURE__*/React.createElement(__ds_scope.Data, {
    size: 28,
    weight: 500
  }, t.val), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "rgba(0,0,0,0.68)",
      fontFeatureSettings: '"ss02","tnum"'
    }
  }, /*#__PURE__*/React.createElement("span", null, t.sub), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.delta.startsWith("+") ? "#B72A06" : "rgba(0,0,0,0.62)"
    }
  }, t.delta))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 32px 48px",
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid rgba(0,0,0,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid rgba(0,0,0,0.08)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: "-0.01em"
    }
  }, "Top Holdings"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "rgba(0,0,0,0.68)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "View all 38 \u2192")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-ui)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "1px solid rgba(0,0,0,0.08)"
    }
  }, ["Holding", "Class", "Weight", "Market value", "1Y"].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: i > 1 ? "right" : "left",
      padding: "12px 20px",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "rgba(0,0,0,0.68)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", {
    style: {
      fontFeatureSettings: '"ss02","tnum","lnum"'
    }
  }, [["MSCI World ETF", "Equity", "18.2%", "$227,229", "+12.4%"], ["US Treasury 10Y", "FI", "14.1%", "$176,040", "+3.8%"], ["Gold (allocated)", "Alt", "9.6%", "$119,857", "+18.1%"], ["India Sovereign 7Y", "FI", "8.4%", "$104,876", "+5.2%"], ["Pvt Credit · Series IV", "Alt", "5.8%", "$72,413", "+9.7%"]].map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i < 4 ? "1px solid rgba(0,0,0,0.06)" : "none"
    }
  }, r.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      textAlign: j > 1 ? "right" : "left",
      padding: "14px 20px",
      color: j === r.length - 1 ? "#B72A06" : "#000",
      fontWeight: j === 0 ? 500 : 400
    }
  }, c))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#011526",
      color: "#fff",
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    onDark: true
  }, "From your advisor"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.25,
      letterSpacing: "-0.015em",
      margin: 0,
      color: "#fff"
    }
  }, "\"Treasury duration is doing the work this quarter \u2014 we're staying patient on alternatives until the December commitments clear.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      background: "rgba(234,79,5,0.32)",
      color: "#FFFBF9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 13
    }
  }, "RM"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 500
    }
  }, "Rajiv Menon"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      color: "rgba(255,255,255,0.7)",
      letterSpacing: ".06em",
      textTransform: "uppercase"
    }
  }, "Lead Advisor \xB7 Dubai"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingTop: 16,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "rgba(255,255,255,0.7)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      fontWeight: 600
    }
  }, "Next review \xB7 02 Jun"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onDark: true,
    size: "sm"
  }, "Schedule call")))));
}
Object.assign(__ds_scope, { PortfolioOverview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/PortfolioOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Tag.jsx
try { (() => {
// Keenai UI Kit — Tag / chip
function Tag({
  active,
  children,
  onClick,
  onDark = false
}) {
  const styles = active ? {
    background: onDark ? "#fff" : "#000",
    color: onDark ? "#000" : "#fff",
    border: "1px solid transparent"
  } : {
    background: "transparent",
    color: onDark ? "#fff" : "#000",
    border: `1px solid ${onDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)"}`
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      padding: "6px 10px",
      borderRadius: 0,
      cursor: "pointer",
      lineHeight: 1,
      ...styles
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Wordmark.jsx
try { (() => {
// Keenai UI Kit — Wordmark
function Wordmark({
  tone = "black",
  height = 28,
  style = {}
}) {
  const src = {
    black: "../../assets/keenai-wordmark-black.svg",
    white: "../../assets/keenai-wordmark-white.svg",
    orange: "../../assets/keenai-wordmark-orange.svg"
  }[tone];
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Keenai",
    style: {
      height,
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Wordmark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/DashboardSidebar.jsx
try { (() => {
// Keenai web — dashboard sidebar

function DashboardSidebar({
  active,
  onChange
}) {
  const items = [["Overview", "trend-up"], ["Holdings", "globe"], ["Advisory", "user"], ["Reports", "download"], ["Documents", "shield"]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      background: "#011526",
      color: "#fff",
      padding: "32px 0",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      borderRight: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "white",
    height: 22
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, items.map(([label, icon]) => {
    const isActive = label === active;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onChange(label),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 24px",
        background: isActive ? "rgba(234,79,5,0.10)" : "transparent",
        border: 0,
        borderLeft: `2px solid ${isActive ? "#EA4F05" : "transparent"}`,
        color: isActive ? "#fff" : "rgba(255,255,255,0.78)",
        fontFamily: "var(--font-ui)",
        fontSize: 13,
        fontWeight: isActive ? 600 : 500,
        letterSpacing: "-0.005em",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 18,
      color: isActive ? "#EA4F05" : "rgba(255,255,255,0.7)"
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "16px 24px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      background: "#EA4F05",
      color: "#011526",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: ".04em"
    }
  }, "AR"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 500
    }
  }, "Anika R."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      color: "rgba(255,255,255,0.7)",
      letterSpacing: ".04em",
      textTransform: "uppercase"
    }
  }, "Mandate \xB7 Growth"))));
}
Object.assign(__ds_scope, { DashboardSidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/DashboardSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Dashboard.jsx
try { (() => {
// Keenai web — authenticated portfolio dashboard

function Dashboard() {
  const [active, setActive] = React.useState("Overview");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      minHeight: 720
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DashboardSidebar, {
    active: active,
    onChange: setActive
  }), /*#__PURE__*/React.createElement(__ds_scope.PortfolioOverview, null));
}
Object.assign(__ds_scope, { Dashboard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/Footer.jsx
try { (() => {
// Keenai web — footer

function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#011526",
      color: "#fff",
      padding: "64px 48px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "white",
    height: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.72)",
      maxWidth: "38ch",
      margin: 0
    }
  }, "Keenai is a wealth-management platform for NRI & diaspora investors. Regulated entities listed under Compliance.")), [["Platform", ["Portfolios", "Advisory", "Aggregation", "Reporting"]], ["Company", ["About", "Insights", "Press", "Careers"]], ["Legal", ["Privacy", "Terms", "Compliance", "Disclosures"]]].map(([head, links]) => /*#__PURE__*/React.createElement("div", {
    key: head,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    onDark: true
  }, head), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "rgba(255,255,255,0.8)",
      textDecoration: "none",
      letterSpacing: "-0.005em"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "48px auto 0",
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      justifyContent: "space-between",
      color: "rgba(255,255,255,0.7)",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      letterSpacing: ".04em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Keenai Wealth \xB7 All rights reserved"), /*#__PURE__*/React.createElement("span", null, "Investments are subject to market risk.")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/keenai-web/NavBar.jsx
try { (() => {
// Keenai web — top navigation

function NavBar({
  tone = "dark",
  active = "Platform",
  onNav
}) {
  const onDark = tone === "dark";
  const wrap = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 48px",
    background: onDark ? "transparent" : "#FFFBF9",
    borderBottom: `1px solid ${onDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
    color: onDark ? "#fff" : "#000"
  };
  const linkStyle = isActive => ({
    fontFamily: "var(--font-ui)",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: isActive ? onDark ? "#fff" : "#000" : onDark ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.68)",
    textDecoration: "none",
    cursor: "pointer",
    padding: "8px 0",
    borderBottom: isActive ? `1px solid ${onDark ? "#EA4F05" : "#EA4F05"}` : "1px solid transparent"
  });
  const items = ["Platform", "Advisory", "Insights", "About"];
  return /*#__PURE__*/React.createElement("nav", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: onDark ? "white" : "black",
    height: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    onClick: () => onNav && onNav(it),
    style: linkStyle(it === active)
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: linkStyle(false),
    onClick: () => onNav && onNav("Sign in")
  }, "Sign in"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav && onNav("Open account")
  }, "Open Account")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/keenai-web/NavBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dashboard = __ds_scope.Dashboard;

__ds_ns.DashboardSidebar = __ds_scope.DashboardSidebar;

__ds_ns.Data = __ds_scope.Data;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Pillars = __ds_scope.Pillars;

__ds_ns.PortfolioOverview = __ds_scope.PortfolioOverview;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

})();
