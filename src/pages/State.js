import React from 'react';

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    Random = () => {
        this.setState({
            count: +(Math.random() * (50 - -50) + -50).toFixed(0)
        })
    }
  
    render() {
      return (
        <div>
            <div   className='Main-info-result'>{this.state.count}</div>
            <button  className='Main-info-button' onClick={() => this.setState({ count: this.state.count + 1 })}>
                +1
            </button>
            <button className='Main-info-button'  onClick={() => this.setState({ count: this.state.count - 1 })}>
                -1
            </button>
            <button  className='Main-info-button' onClick={this.Random}>
                Random
            </button>
            <button  className='Main-info-button' onClick={() => this.setState({ count: 0 })}>
                Reset
            </button>
        </div>
      );
    }
  }


function State(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>State</h1>
            <p className='Main-info-text'>
            «Состояние» очень похоже на уже знакомые нам пропсы, отличие в том, 
            что состояние контролируется и доступно только конкретному компоненту. 
            State - это JavaScript объект, который хранит динамические данные компонента 
            и позволяет компоненту отслеживать изменения между рендерами(render).
            </p>
            <hr />
            <p className='Main-info-text'>
                Использование state в классовых и функциональных компонентах отличается, что мы и рассмотрим
                далее.
            </p>
            <p className='Main-info-text'>
                Для примера возьмем счетчик, который генерирует случайное число и может изменять данное 
                число, увеличивая или уменьшая на единицу. Пропишем данный пример через классовую компоненту:
            </p>
            <div className='Main-info-code'>
                <code>
                class Example extends React.Component {'{'} <br />
                &nbsp;constructor(props) {'{'}<br />
                &nbsp;&nbsp;super(props);<br />
                &nbsp;&nbsp;this.state = {'{'}<br />
                &nbsp;&nbsp;&nbsp;count: 0<br />
                &nbsp;&nbsp;{'}'};<br />
                &nbsp;{'}'}<br />
                <br />
                Random = () {'=>'} {'{'}<br />
                &nbsp;this.setState({'{'}<br />
                &nbsp;&nbsp;count: +(Math.random() * (50 - -50) + -50).toFixed(0)<br />
                &nbsp;{'}'})<br />
                {'}'}<br />
                <br />
                render() {'{'}<br />
                &nbsp;return (<br />
                &nbsp;&nbsp;&lt;div&gt;<br />
                &nbsp;&lt;div   className='Main-info-result'&gt;{'{'}this.state.count{'}'}&lt;/div &gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;button  className='Main-info-button' onClick={'{'}() {'=>'} 
                 this.setState({'{'} count: this.state.count + 1 {'}'}){'}'}&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;+1<br />
                &nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;button className='Main-info-button'  onClick={'{'}() {'=>'} 
                 this.setState({'{'} count: this.state.count - 1 {'}'}){'}'}&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;-1<br />
                &nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;button  className='Main-info-button' onClick={'{'}this.Random{'}'}&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Random<br />
                &nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;button  className='Main-info-button' onClick={'{'}() {'=>'} 
                 this.setState({'{'} count: 0 {'}'}){'}'}&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Reset<br />
                &nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
                &nbsp;&nbsp;&lt;/div&gt;<br />
                &nbsp;);{'}'}<br />
            {'}'}<br />
                </code>
            </div>
            <p className='Main-info-text'>
                Результат кода смотри ниже:
            </p>
            <div>
                <Example />
            </div> 
            <p className='Main-info-text'>
                Исходя из кода выше делаем вывод, что конструктор — это единственное место, 
                где вы можете присвоить значение this.state напрямую. В остальных случаях нужно
                использовать setState.
            </p>
            <p className='Main-info-text'>
                Теперь, используя хук состояния useState, преобразуем классовую компоненту в функциональную:
            </p>
            <div className='Main-info-code'>
                <code>
            import {'{ '}useState {'}'} from 'react';
            <br />
            function Example() {'{'}<br />
            &nbsp;const [count, setCount] = useState(0);<br />
            &nbsp;return (<br />
                &nbsp;&nbsp;&lt;div&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;div className='Main-info-result'&gt;{'{'}count{'}'}&lt;/div&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;button className='Main-info-button' onClick={'{'}() =&gt; setCount(count + 1){'}'}&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;+1<br />
                &nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;button className='Main-info-button' onClick={'{'}() =&gt; setCount(count - 1){'}'}&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;-1<br />
                &nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;button className='Main-info-button' onClick={'{'}() =&gt; setCount(+(Math.random() * (50 - -50) + -50).toFixed(0)){'}'}&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Random<br />
                &nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;button className='Main-info-button' onClick={'{'}() =&gt; setCount(0){'}'}&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Reset<br />
                &nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
                &nbsp;&nbsp;&lt;/div&gt;<br />
                &nbsp;);<br />
            {'}'}<br />
            <br />
            export default Example;
                </code>
            </div>
            <p className='Main-info-text'>
                useState - это хук, который позволяет добавлять состояние React к компонентам-функциям. <br />
                
            </p>
            <p className='Main-info-text'>
                <span>Что мы передаем useState в качестве аргумента?</span> <br />
                Единственный аргумент для хука useState() 
                - это начальное состояние. В отличие от классов, состояние не обязательно должно быть 
                объектом. Мы можем сохранять число или строку, если это все, что нам нужно. В нашем 
                примере мы хотим хранить просто число, показывающее сколько раз пользователь кликал, 
                поэтому передаем 0 в качестве начального состояния для нашей переменной. (Если бы мы 
                хотели сохранить два разных значения в состоянии, мы бы вызвали useState() дважды.)
            </p>
            <p className='Main-info-text'>
                <span>Что возвращает useState?</span> <br />
                Он возвращает два значения: текущее состояние и функцию, которая его обновляет.
            </p>
            <p className='Main-info-text'>
                Как мы видим из примеров выше, функциональная компонента выглядит лаконичнее, но
                выбор всегда остается за Вами, какую компоненту использовать.
            </p>
        </div>
    )
}

export default State;