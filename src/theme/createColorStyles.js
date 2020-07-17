export default (theme = {}) => {
  const { colors } = theme;
  return {
    error: {
      color: colors["textError"],
      backgroundColor: colors["backgroundError"],
    },
  };
};
