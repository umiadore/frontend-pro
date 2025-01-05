import MyButton from "../../components/myButton/MyButton";

function Lesson02() {
  const element = <h4> Это JSX - element из переменной element</h4>;
  const text = "Это строка пришла из переменной text!";
  const react = {
    dev: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  };

  function showTheDev(obj) {
    if (obj.dev) {
      return "Developer: " + obj.dev;
    }
    return "Передайте валидный объект!";
  }

  // переменная для работы тернарного оператора
  const isLoggedIn = true;

  return (
    <div>
      <h2>JSX components 🤖</h2>
      {/* чтобы показать element на странице, нужно написать его внутри return */}
      <p>
        В JSX мы можем пользоваться динамическими данными, которые приходят из
        тела react компонента или других файлов:
      </p>
      {element}
      <p>Здесь будет строка: {text}</p>
      <p>Это вычисление случилось в JSX: {20 + 22} !!!</p>
      {/* пример работы тернарного оператора с картинкой */}
      {isLoggedIn ? (
        <img width={"100px"} src={react.logo} alt="React Logo" />
      ) : (
        ""
      )}
      {/* those two are the same: */}
      {/* <p> React developer: {react.dev}</p> */}
      <p>{showTheDev(react)}</p>
      <h4>Пример тернарного оператора в React:</h4>
      <p>
        Пользователь <b>{isLoggedIn ? "в данный момент" : "не"}</b>{" "}
        авторизорован!
      </p>
      <h4>Пример использования компонентов:</h4>
      <MyButton /> <MyButton /> <MyButton />
    </div>
  );
}

export default Lesson02;
