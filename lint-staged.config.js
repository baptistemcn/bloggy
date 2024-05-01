module.exports = {
  "**.*": () => {
    return ["pnpm run format", "pnpm run lint", "pnpm run test"];
  },
};
