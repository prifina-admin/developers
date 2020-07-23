export default (theme = {}) => {
  const { fontSizes, sizes, borders } = theme;

  const baseProps = {
    fontSize: fontSizes["sm"],
    lineHeight: sizes[20],
    border: borders.input.base,
    borderRadius: borders.input.borderRadius,
    paddingLeft: sizes[7],
    paddingRight: sizes[7],
    paddingTop: sizes[13],
    paddingBottom: sizes[13],
  };

  return {
    input: {
      base: baseProps,
    },
    textarea: {
      base: baseProps,
    },
  };
};
