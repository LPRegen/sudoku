module.exports = {
  "src/**/*.{ts,tsx}":
    "eslint --cache --report-unused-disable-directives --max-warnings 0",
  "src/**/*.{ts,tsx,css,scss,md}": "prettier --write --ignore-unknown",
};
