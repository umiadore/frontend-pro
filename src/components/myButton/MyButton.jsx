// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед объявлением функции, это тоже валидная запись, разницы нет

export default function MyButton ({func, text}) {
    return <button onClick={func}>{text}</button>
}