class ClickCounter {
  constructor(domHook, opts) {
    this.elem = document.getElementById(domHook)

    this.props = {}

    this.state = {}

    this.elem.addEventListener("click", (e) => {
      this.incrementClickCount();
    })
  }

  incrementClickCount() {
    this.props.parent.clickHandler()
  }

  render() {
    let body = `
      <label for="text-input">Click Count:</label>
      <input type="text" id="text-input" value="I have been clicked ${this.props.parent.state.clickCount} times"></input>
    `
    this.elem.innerHTML = body;
  }
}
class OddEven {
  constructor(domHook) {
    this.elem = document.getElementById(domHook);

    this.props = {}
    this.state = {}
  }

  oddEvenText() {
    return this.props.parent.state.clickCount % 2 === 0 ? "even" : "odd"
  }

  render() {
    let body = `<p class="${this.oddEvenText()}">${this.oddEvenText().toUpperCase()}<p>`;

    this.elem.innerHTML = body;

    return body;
  }
}
class ParentWidget {
  constructor() {
    this.props = {
      children: []
    }

    this.state = {
      clickCount: 0
    }
  }

  registerChild(c) {
    this.props.children.push(c);
    c.props.parent = this;
    this.render();
  }

  clickHandler() {
    this.state.clickCount += 1;

    this.render();
  }

  render() {
    this.props.children.forEach(c => c.render())
  }
}

let cc = new ClickCounter("click-counter-hook");
let oe = new OddEven("odd-even-hook");
let parent = new ParentWidget();

parent.registerChild(cc);
parent.registerChild(oe);
