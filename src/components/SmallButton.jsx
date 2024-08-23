const SmallButton = ({ style, text }) => {
  const css = `btn btn-${style} btn-xs`;
  return <button className={css}>{text}</button>;
};

export default SmallButton;
