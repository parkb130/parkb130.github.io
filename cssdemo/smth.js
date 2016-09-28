const defaults = {
  width: window.innerWidth,
  height: window.innerHeight,
  scale: 50,
  opacity: 0.5
};

class BarnsleyFern {

  constructor(element, options) {
    Object.assign(this, defaults, options);

    this.element = element;

    this.init();
    this.update(options);
  }

  init() {
    const canvas  = this.canvas   = document.querySelector(this.element);
    const context = this.context  = this.canvas.getContext('2d');
    const width   = canvas.width  = this.width;
    const height  = canvas.height = this.height;

    context.translate(width / 2, height);
  }

  getRule(rules) {
    let rulesLenght = rules.length;
    let random = Math.random();

    while (rulesLenght--) {
      const rule = rules[rulesLenght];

      if (random < rule.weight) {
        return rule;
      }

      random -= rule.weight;
    }

  }

  render(options) {
    const { scale, opacity } = this;

    let iterations = 100;
    let x = Math.random();
    let y = Math.random();

    while (iterations--) {
        const rule = this.getRule(this.rules);
        const x1 = x * rule.a + y * rule.b + rule.tx;
        const y1 = x * rule.c + y * rule.d + rule.ty;

        x = x1;
        y = y1;

        this.context.fillRect(x * scale, -y * scale, opacity, opacity);
    }

  }

  update(options) {
    this.render(options)
    requestAnimationFrame(this.update.bind(this));
  }

}

// https://en.wikipedia.org/wiki/Barnsley_fern
const rules = [
  {
    a: 0.85,
    b: 0.04,
    c: -0.04,
    d: 0.85,
    tx: 0,
    ty: 1.6,
    weight: 0.65
  },
  {
    a: -0.15,
    b: 0.28,
    c: 0.26,
    d: 0.24,
    tx: 0,
    ty: 0.44,
    weight: 0.07
  },
  {
    a: 0.2,
    b: -0.26,
    c: 0.23,
    d: 0.22,
    tx: 0,
    ty: 1.6,
    weight: 0.07
  },
  {
    a: 0,
    b: 0,
    c: 0,
    d: 0.16,
    tx: 0,
    ty: 0,
    weight: 0.21
  }
];

new BarnsleyFern('.canvas', {
  rules: rules
});

