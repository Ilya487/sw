export const changeThemeCssVars = (theme) => {
  const vars = ["bg"];
  const root = document.documentElement;

  vars.forEach((v) => {
    root.style.setProperty(
      `--theme-current-${v}`,
      `var(--theme-${theme}-${v})`
    );
  });
};
