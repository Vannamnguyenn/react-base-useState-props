import React, { useState } from "react";
import PropTypes from "prop-types";

//  useState
// +) Quản lí trạng thái data trong cpn
// +) Dữ liệu có khả năng thay đổi
// +) Khi state thay đổi cpn re-render lại
// +) setState có thể truyên vào callback func

const Header = (props) => {
  const { title } = props;
  const [count, setCount] = useState("abc");

  const handleIncrement = () => {
    // setCount((prevState) => {
    //   // logic
    //   return prevState + 1;
    // });
    setCount(count + 1);
  };

  console.log("re-render");

  return (
    <div style={{ padding: "50px" }}>
      {/* {title} */}
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
