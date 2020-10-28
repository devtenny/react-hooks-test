// import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
import "./App.css";

// const useTitle = (initTitle: string) => {
//   const [title, setTitle] = useState(initTitle);
//   const updateTitle = () => {
//     const htmlTitle = document.querySelector("title");
//     if (htmlTitle) htmlTitle.innerText = title;
//   };
//   useEffect(updateTitle, [title]);
//   return setTitle;
// };

// // const useClick = (onClick: any) => {
// //   const element = useRef();
// //   if (element.current !== undefined) {
// //     element.current.addEventListener("click", onClick)
// //   }
// //   return element;
// // }

// function App() {
//   const sayHello = () => console.log("hello");
//   const [number, setNumber] = useState(0);
//   const [aNumber, setAnumber] = useState(0);
//   // ComponentDidMount, ComponentWillUnmount, ComponentDidUpdate 역할
//   useEffect(sayHello, []); // 첫번째 인자는 함수, 두번째 인자는 deps;
//   // 변화되는 값이 배열 안의 값일 때만 실행됨

//   const titleUpdater = useTitle("Loading...");
//   setTimeout(() => titleUpdater("Home"), 3000);

//   const sayHello2 = () => console.log("say hello");
//   // const title = useClick(sayHello2);
//   return (
//     <div className="App">
//       {/* <h1 ref={title}>Hi</h1> */}

//       <button onClick={() => setNumber(number + 1)}>{number}</button>
//       <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
//     </div>
//   );
// }

// export default App;
