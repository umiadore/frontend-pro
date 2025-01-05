import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './lesson01.css'
// ! как создать React компонент?

// 1. файл называется с большой буквы
// 2. имеет расширение .jsx
// 3. внутри есть функция, у которой в return верстка
// 4. функция называется именем файла, с большой буквы
// 5. функция экспортируется из файла

function Lesson01() {
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Привет, это React ⚡️</h1>

            <p className="read-the-docs">
                Этот React проект собран на сборщике Vite
            </p>
        </>
    )
}

// без экспорта не получится использовать компонент, не получится связаться с кодом
export default Lesson01