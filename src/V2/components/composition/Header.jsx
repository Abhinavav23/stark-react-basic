export const Header = (props) => {
    console.log('props', props);
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#ddd",
        padding: '10px'
      }}
    >
      <div>Stark</div>
      {/* dynamic content */}
      {props.children}
      <div>Logo</div>
    </header>
  );
};
