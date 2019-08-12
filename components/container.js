function Container(props) {
  return (
    <div
      className={`max-w-4xl mx-auto ${
        props.disablePadding ? `` : `p-4 md:p-8`
      } w-full`}
    >
      {props.children}
    </div>
  );
}

export default Container;
