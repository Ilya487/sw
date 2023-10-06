export const changeThemeCssVars = (theme) => {
  const vars = ["bg", "page", "header-bg", "header-color"];
  const root = document.documentElement;

  vars.forEach((v) => {
    root.style.setProperty(
      `--theme-current-${v}`,
      `var(--theme-${theme}-${v})`
    );
  });
};
