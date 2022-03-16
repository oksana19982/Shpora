import React from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
      return true;
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button className='Main-info-button' type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }


function Lifecycle(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Lifecycle</h1>
            <p className='Main-info-text'>
                Каждый компонент в Реакте проходит через жизненный цикл, который мы можем отслеживать 
                и которым можем управлять на протяжении трех этапов.
                Три основных этапа: <span>Монтирование, Обновление, Размонтирование.</span>
            </p>
            <hr />
            <p className='Main-info-text'>
                Рассмотрим методы первого этапа Mounting: <br />
                <ul>
                    <li>constructor()  - служит для инициализации компонента.</li>
                    <li>getDerivedStateFromProps() - метод, который вызывается после рендеринга элемента.</li>
                    <li>render() - метод, который вызывается всегда обязательно, так как вписывает HTML в DOM.
                    (если конечно shouldComponentUpdate возвращает true).</li>
                    <li>componentDidMount() - метод, который будет вызван лишь раз за жизненный цикл и 
                    будет показывать, что компонент и его дочерние компоненты отрисовались без ошибок. 
                    Вызывается после рендеринга компонента. Здесь можно выполнять запросы к удаленным 
                    ресурсам.
                    </li>
                </ul>
            </p>
            <p className='Main-info-text'>
                К методам второго этапа Updating относятся: <br />
                <ul>
                    <li>getDerivedStateFromProps() - этот метод используется, когда компонент обновляется, 
                    но также и когда он монтируется.
                    </li>
                    <li>shouldComponentUpdate() - решает нужно ли делать перерисовку компонента (рендеринг) или нет. 
                    Иногда перерисовка тяжелая и чтобы не делать ее при каждом шаге, нужен данный метод.
                    Вызывается каждый раз при обновлении объекта props или state. В качестве параметра 
                    передаются новый объект props и state. Эта функция должна возвращать true (надо делать обновление)
                    или false (игнорировать обновление). По умолчанию возвращается true. Но если функция будет 
                    возвращать false, то тем самым мы отключим обновление компонента, а последующие функции не 
                    будут срабатывать.
                    </li>
                    <li>render() - делает то же, о чем писалось ранее.</li>
                    <li>getSnapshotBeforeUpdating() - этот метод используется прямо перед изменениями из VDOM, 
                    которые должны быть отображены в DOM. Используется, когда нужно узнать 
                    текущее состояние.
                    </li>
                    <li>componentDidUpdate() - будет вызываться в каждом цикле перерисовки сразу после рендеринга 
                    (если shouldComponentUpdate возвращает true). 
                    В качестве параметров передаются старые значения объектов props и state.
                    </li>
                </ul>
            </p>
            <p className='Main-info-text'>
                В третьем этапе есть всего один метод:<br />
                <ul>
                    <li>
                        componentWillUnmount() - метод используется для очистки компонента из дома. 
                        Вызывается прям перед удалением.
                    </li>
                </ul>
            </p>
            <div className='Main-info-code'>
                <code>
                    class Header extends React.Component {'{'}<br />
                    &nbsp;constructor(props) {'{'}<br />
                    &nbsp;&nbsp;super(props);<br />
                    &nbsp;&nbsp;this.state = {'{'}favoritecolor: &quot;red&quot;{'}'};<br />
                    &nbsp;{'}'}<br />
                    &nbsp;shouldComponentUpdate() {'{'}<br />
                    &nbsp;&nbsp;return true;<br />
                    &nbsp;{'}'}<br />
                    &nbsp;changeColor = () =&gt; {'{'}<br />
                    &nbsp;&nbsp;this.setState({'{'}favoritecolor: &quot;blue&quot;{'}'});<br />
                    &nbsp;{'}'}<br />
                    &nbsp;render() {'{'}<br />
                    &nbsp;&nbsp;return (<br />
                    &nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
                    &nbsp;&nbsp;&nbsp;&lt;h1&gt;My Favorite Color is {'{'}this.state.favoritecolor{'}'}&lt;/h1&gt;<br />
                    &nbsp;&nbsp;&nbsp;&lt;button type=&quot;button&quot; onClick={'{'}this.changeColor{'}'}&gt;Change color&lt;/button&gt;<br />
                    &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &nbsp;{'}'}<br />
                    {'}'}<br />
                    <br />
            ReactDOM.render(&lt;Header /&gt;, document.getElementById('root'));<br />
                </code>
            </div> 
            <p className='Main-info-text'>
                Ниже можно увидеть результат кода выше:
            </p> 
            <Header />         
        </div>
    )
}

export default Lifecycle;