class ClickCounter {
  constructor(domHook, opts) {
    this.elem = document.getElementById(domHook)

    this.props = Object.assign({
      increment: 1,
      clickCount: 0
    }, opts)

    this.state = {
      clickCount: this.props.clickCount
    }

    this.elem.addEventListener("click", (e) => {
      this.incrementClickCount();
    })

    this.render();
  }

  incrementClickCount() {
    this.state.clickCount += this.props.increment;
    this.render();
  }

  render() {
    let body = `
      <label for="text-input">Click Count:</label>
      <input type="text" id="text-input" value="I have been clicked ${this.state.clickCount} times"></input>
    `
    this.elem.innerHTML = body;
  }
}

new ClickCounter("click-counter-hook", {clickCount: 20, increment: 30});
new ClickCounter("click-counter-hook2", {clickCount: 80, increment: -20});
new ClickCounter("click-counter-hook3", {clickCount: 220});
new ClickCounter("click-counter-hook4", {clickCount: 20});
new ClickCounter("click-counter-hook5", {clickCount: 20});
new ClickCounter("click-counter-hook6", {clickCount: 20});
