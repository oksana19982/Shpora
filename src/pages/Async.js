import React from 'react';

function Async(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Async</h1>
            <p className='Main-info-text'>
                Большинство веб-приложений работают с данными, которые, как правило, 
                хранятся в базе данных (БД). Что получить эти данные приложения 
                обычно используют AJAX, то есть асинхронные запросы к серверу. 
                Сервер, получив такой запрос, обращается к БД, а затем возвращает данные обратно приложению.
            </p>
            <p className='Main-info-text'>
                Рассмотрим базовые стадии взаимодействия клиент-сервер.
            </p>
            <hr />
            <p className='Main-info-text'>
                Итак, у нас есть клиент. Обычно это программа, которая запрашивает данные
                по определённом протоколу у сервера. Как правило, мы используем протокол
                HTTPS - это HTTP с шифрованием. Сначала клиент создаёт запрос определённого
                типа: GET, POST, PUT, DELETE и т.д. Также он может добавить в запрос какие-то данные, 
                например данные формы, если запрос типа POST или PUT. Кроме этого клиент может 
                указать заголовки и параметры запроса. Когда запрос создан, клиент посылает его 
                серверу.В ваших приложениях вы всегда будете иметь дело с HTTP запросами.
            </p>
            <p className='Main-info-text'>
                После того как запрос попал в сеть, он идёт к серверу. Сервер - это тоже программа, 
                только на другой машине, которая может быть расположена в любой точке земного 
                шара. Как только сервер получил запрос, он начинает его обрабатывать. Сервер 
                получает у запроса всю информацию, необходимую для выборки запрошенных данных. 
                Эта информация включает в себя:
                <ul>
                    <li>
                        URL - он же путь к запрашиваемому ресурсу. По нему сервер понимает, 
                        какой его метод обработки запроса должен быть вызван.
                    </li>
                    <li>
                        Заголовки - строки в HTTP-сообщении, содержащие разделённую двоеточием 
                        пару параметр-значение. Например X-AuthToken: vuaw672387heHh33298Sei92372wi0rsdg836194 
                        - заголовок, передающий в запросе токен текущего залогиненного пользователя, 
                        он же - токен сессии. Заголовки не видны в адресной строке - они не присутствуют в URL.
                    </li>
                    <li>
                        Параметры запроса - пары вида ключ=значение, которые могут быть добавлены 
                        в URL после знака ?. Если параметров больше одного, они разделяются 
                        между собой символом &.
                    </li>
                </ul>
            </p>
            <p className='Main-info-text'>
                Стоит упомянуть тот факт, что послав последовательно N запросов, нет гарантии, 
                что ответы придут в таком же порядке. Дело в том, что сервер на обработку 
                этих запросов может тратить разное количество времени.
            </p>
            <p className='Main-info-text'>
                Чтобы выполнить AJAX-запрос к серверу, можете использовать встроенный в 
                браузер метод window.fetch или любую AJAX-библиотеку, например Axios или jQuery AJAX.
            </p>
            <p className='Main-info-text'>
                Лучшее место для асинхронного запроса в методе componentDidMount.
            </p>
            <p className='Main-info-text'>
                Компонент ниже показывает, как в componentDidMount задать внутреннее состояние из 
                результата AJAX-запроса. Допустим, наш API возвращает следующий JSON-объект:
            </p>
            <div className='Main-info-code'>
                <code>
                {'{'}<br />
                &nbsp;&quot;items&quot;: [<br />
                    &nbsp;&nbsp;{'{'} &quot;id&quot;: 1, &quot;name&quot;: 
                    &quot;Яблоки&quot;,  &quot;price&quot;: &quot;$2&quot; {'}'},<br />
                    &nbsp;&nbsp;{'{'} &quot;id&quot;: 2, &quot;name&quot;: &quot;Персики&quot;, 
                    &quot;price&quot;: &quot;$5&quot; {'}'}<br />
                    &nbsp;] <br />
                {'}'}<br />
                </code>
            </div>
            <br />
            <div className='Main-info-code'>
                <code>
                class MyComponent extends React.Component {'{'}<br />
                &nbsp;constructor(props) {'{'}<br />
                &nbsp;super(props);<br />
                &nbsp;this.state = {'{'}<br />
                &nbsp;&nbsp;error: null,<br />
                &nbsp;&nbsp;isLoaded: false,<br />
                &nbsp;&nbsp;items: []<br />
                &nbsp;{'}'};<br />
                &nbsp;{'}'}<br />
                    <br />
                    &nbsp;componentDidMount() {'{'}<br />
                    &nbsp;fetch(&quot;https://api.example.com/items&quot;)<br />
                    &nbsp;&nbsp;.then(res =&gt; res.json())<br />
                    &nbsp;&nbsp;.then(<br />
                    &nbsp;&nbsp;(result) =&gt; {'{'}<br />
                    &nbsp;&nbsp;&nbsp;this.setState({'{'}<br />
                    &nbsp;&nbsp;&nbsp;isLoaded: true,<br />
                    &nbsp;&nbsp;&nbsp;items: result.items<br />
                    &nbsp;&nbsp;{'}'});<br />
                    &nbsp;{'}'},<br />
                        /* Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(), <br />
                        чтобы не перехватывать исключения из ошибок в самих компонентах.*/<br />
                        &nbsp;(error) =&gt; {'{'}<br />
                        &nbsp;&nbsp;this.setState({'{'}<br />
                        &nbsp;&nbsp;isLoaded: true,<br />
                        &nbsp;&nbsp;error<br />
                        &nbsp;&nbsp;{'}'});<br />
                        &nbsp;{'}'}<br />
                        &nbsp;)<br />
                        &nbsp;{'}'}<br />
                    <br />
                    &nbsp;render() {'{'}<br />
                    &nbsp;const {'{'} error, isLoaded, items {'}'} = this.state;<br />
                    &nbsp;if (error) {'{'}<br />
                    &nbsp;&nbsp;return &lt;div&gt;Ошибка: {'{'}error.message{'}'}&lt;/div&gt;; <br />
                    &nbsp;{'}'} else if (!isLoaded) {'{'}<br />
                    &nbsp;&nbsp;return &lt;div&gt;Загрузка...&lt;/div&gt;; <br />
                    &nbsp;{'}'} else {'{'}<br />
                    &nbsp;&nbsp;return (<br />
                    &nbsp;&nbsp;&lt;ul&gt;<br />
                    &nbsp;&nbsp;&nbsp;{'{'}items.map(item =&gt; (<br />
                    &nbsp;&nbsp;&nbsp;&lt;li key={'{'}item.id{'}'}&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{'{'}item.name{'}'} {'{'}item.price{'}'}<br />
                    &nbsp;&nbsp;&nbsp;&lt;/li&gt;<br />
                    &nbsp;&nbsp;&nbsp;)){'}'}<br />
                    &nbsp;&nbsp;&lt;/ul&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &nbsp;{'}'}<br />
                    &nbsp;{'}'}<br />
                {'}'}<br />
                </code>
            </div>
            <p className='Main-info-text'>
                Вот эквивалент с хуками:
            </p>
            <div className='Main-info-code'>
                <code>
                function MyComponent() {'{'}<br />
                &nbsp;const [error, setError] = useState(null);<br />
                &nbsp;const [isLoaded, setIsLoaded] = useState(false);<br />
                &nbsp;const [items, setItems] = useState([]);<br />
                    <br />
                    /* Примечание: пустой массив зависимостей [] означает, что<br />
                    этот useEffect будет запущен один раз<br />
                    аналогично componentDidMount()*/<br />
                    useEffect(() =&gt; {'{'}<br />
                    &nbsp;fetch(&quot;https://api.example.com/items&quot;)<br />
                    &nbsp;&nbsp;.then(res =&gt; res.json())<br />
                    &nbsp;&nbsp;.then(<br />
                    &nbsp;&nbsp;(result) =&gt; {'{'}<br />
                    &nbsp;&nbsp;&nbsp;setIsLoaded(true);<br />
                    &nbsp;&nbsp;&nbsp;setItems(result);<br />
                    &nbsp;&nbsp;{'}'},<br />
                        /* Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(), <br />
                        чтобы не перехватывать исключения из ошибок в самих компонентах.*/<br />
                        &nbsp;&nbsp;(error) =&gt; {'{'}<br />
                        &nbsp;&nbsp;&nbsp;setIsLoaded(true);<br />
                        &nbsp;&nbsp;&nbsp;setError(error);<br />
                        &nbsp;&nbsp;{'}'}<br />
                        &nbsp;&nbsp;)<br />
                        &nbsp;{'}'}, [])<br />
                <br />
                &nbsp;if (error) {'{'}<br />
                &nbsp;return &lt;div&gt;Ошибка: {'{'}error.message{'}'}&lt;/div&gt;;<br />
                &nbsp;{'}'} else if (!isLoaded) {'{'}<br />
                &nbsp;return &lt;div&gt;Загрузка...&lt;/div&gt;;<br />
                &nbsp;{'}'} else {'{'}<br />
                &nbsp;return (<br />
                &nbsp;&nbsp;&lt;ul&gt;<br />
                &nbsp;&nbsp;{'{'}items.map(item =&gt; (<br />
                &nbsp;&nbsp;&nbsp;&lt;li key={'{'}item.id{'}'}&gt;<br />
                &nbsp;&nbsp;&nbsp;{'{'}item.name{'}'} {'{'}item.price{'}'}<br />
                &nbsp;&nbsp;&nbsp;&lt;/li&gt;<br />
                &nbsp;&nbsp;)){'}'}<br />
                &nbsp;&nbsp;&lt;/ul&gt;<br />
                &nbsp;);<br />
                &nbsp;{'}'}<br />
                {'}'}<br />
                </code>
            </div>
        </div>
    )
}

export default Async;