// Keeps GitHub in its dark theme so code, diffs and alerts stay readable on the night sky.
const root = document.documentElement;

function forceDark()
{
  if (root.dataset.colorMode !== "dark")
  {
    root.dataset.colorMode = "dark";
  }
  if (root.dataset.darkTheme !== "dark")
  {
    root.dataset.darkTheme = "dark";
  }

  // GitHub only downloads the theme files a user has picked, so load the dark one if it's missing.
  const sheet = document.querySelector('link[data-color-theme="dark"]:not([href])');
  if (sheet)
  {
    sheet.href = sheet.dataset.href;
  }
}

forceDark();
document.addEventListener("DOMContentLoaded", forceDark);
new MutationObserver(forceDark).observe(root, { attributeFilter: ["data-color-mode", "data-dark-theme"] });
