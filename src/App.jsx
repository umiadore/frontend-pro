import "./App.css";
import "./homeworks/homework01/homework01.css";
import "./homeworks/homework02/homework02.css";
// import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Homework01 from "./homeworks/homework01/Homework01";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Homework02 from "./homeworks/homework02/Homework02";

function App() {
  return (
    <>
      {/* <Homework01 /> */}
      <Homework02/>
      {/* <Lesson01 /> */}
      <Lesson02 />
      <Lesson03 />
      <Lesson04 />
    </>
  );
}

export default App;
