import { ToyReact, Component } from './ToyReact.js'

class MyComponent extends Component {
    render() {
        return <div>
            <span>heloo world</span>
            <div>
                {this.children}
            </div>
        </div>
    }
}

let a = <MyComponent  name="a" id="ida">
    <div>1111</div>
</MyComponent>



ToyReact.render(a, document.body)
