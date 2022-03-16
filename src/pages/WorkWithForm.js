import React from 'react';

function WorkWithForm (){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Work With Form</h1>
            <p className='Main-info-text'>
                Хотя в React мы можем использовать все стандартные элементы форм, 
                которые есть в html, однако здесь эти элементы приобретают дополнительные 
                возможности. Рассмотрим, как работать с формами в React.
            </p>
            <div className='Main-info-code'>
                <code>
                class UserForm extends React.Component {'{'}<br/>
                &nbsp;constructor(props) {'{'}<br/>
                &nbsp;&nbsp;super(props);<br/>
                &nbsp;&nbsp;this.state = {'{'}name: &quot;&quot;{'}'};<br/>
                <br/>
                &nbsp;&nbsp;this.onChange = this.onChange.bind(this);<br/>
                &nbsp;&nbsp;this.handleSubmit = this.handleSubmit.bind(this);<br/>
                &nbsp;{'}'}<br/>
                &nbsp;onChange(e) {'{'}<br/>
                &nbsp;&nbsp;var val = e.target.value;<br/>
                &nbsp;&nbsp;this.setState({'{'}name: val{'}'});<br/>
                &nbsp;{'}'}<br/>
                <br/>
                &nbsp;handleSubmit(e) {'{'}<br/>
                &nbsp;&nbsp;e.preventDefault();<br/>
                &nbsp;&nbsp;alert(&quot;Имя: &quot; + this.state.name);<br/>
                &nbsp;{'}'}<br/>
                <br/>
                &nbsp;render() {'{'}<br/>
                &nbsp;&nbsp;return (<br/>
                    &nbsp;&nbsp;&nbsp;&lt;form onSubmit={'{'}this.handleSubmit{'}'}&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;Имя:&lt;/label&gt;&lt;br /&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;text&quot; value={'{'}
                    this.state.name{'}'} onChange={'{'}this.onChange{'}'}/&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=&quot;submit&quot; value=&quot;Отправить&quot; /&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&lt;/form&gt;<br/>
                    &nbsp;&nbsp;);<br/>
                    &nbsp;{'}'}<br/>
                    &nbsp;{'}'}<br/>
                    &nbsp;ReactDOM.render(<br/>
                        &nbsp;&nbsp;&lt;UserForm /&gt;,<br/>
                        &nbsp;&nbsp;document.getElementById(&quot;app&quot;)<br/>
                        &nbsp;)<br/>
                </code>
            </div>
            <p className="Main-info-text">
                Определенный здесь компонент UserForm представляет форму для ввода 
                имени пользователя с возможностью условной отправки.
                Чтобы контролировать введенные значения, в конструкторе устанавливается 
                объект state.
            </p>
            <p className="Main-info-text">
                При определении поля ввода каждое поле связывается с определенным значением в state:
            </p>
            <div className='Main-info-code'>
                <code>
                &lt;input type=&quot;text&quot; value={'{'}this.state.name{'}'} 
                onChange={'{'}this.onChange{'}'} /&gt;
                </code>
            </div>
            <p className="Main-info-text">
                Так, источником значения для поля ввода имени является объект this.state.name.
                Для отслеживания изменений в поле ввода нам надо определить обработчик для события 
                change с помощью атрибута onChange. Этот обработчик будет срабатывать при каждом 
                нажатии клавиши клавиатуры. Если мы не определим для поля подобный обработчик, 
                то это поле ввода будет доступно только для чтения.
                Суть каждого обработчика заключается в изменении значений в this.state
            </p>
            <p className="Main-info-text">
                С помощью e.target.value получаем введенное значение. После обновления новое 
                значение this.state.name отобразится в поле ввода.
                Для условной отправки устанавливаем обработчик у формы для события submit, 
                который выводит в окне введенные значения.
            </p>
        </div>
    )
}

export default WorkWithForm;