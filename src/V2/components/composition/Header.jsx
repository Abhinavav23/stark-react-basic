export const Header = ({children, theme, device, logoDesign}) => {
  // console.log('bgColor', bgColor);

  // let myBgColor = ''
  // if(!bgColor){
  //   myBgColor = '#ddd'
  // }else{
  //   myBgColor = bgColor
  // }

  let myStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: '10px',
    marginBottom: '10px',
    // dynamic style
    background: theme === 'dark' ? 'black' : 'gray',
    color: theme === 'dark' ? 'white' : 'blue'
  }

  if(device === 'mobile'){
    myStyle.flexDirection = 'column'
    myStyle.gap = '8px'
    myStyle.alignItems = 'center'
  }


  return (
    <header style={myStyle}>
      <div>Stark</div>
      {/* dynamic content */}
      {children}
      <div
        // getting classnames directly and applying it
        className={logoDesign}
        
        // getting some value based on which we are selecting classNAme
        // className={logoDesign === "circular" ? "circular-logo" : "square-logo"}
      >
        Logo
      </div>
    </header>
  );
};
