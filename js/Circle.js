import Figure from "./Figure.js";

export default class Circle extends Figure {
	constructor(name, radius) {
		super(name);
		this.radius = radius;
	}

	get diameter() {
		return this.radius * 2;
	}
	get area() {
		return Math.PI * this.radius * this.radius;
	}
	get circumference() {
		return 2 * Math.PI * this.radius;
	}
	get htmlString() {
		document.getElementById("results").innerHTML = `<div class="result">
        <div class="figure circle" style="width: DIAMETERpx; height: DIAMETERpx;"></div>
        <div class="infoBox">
          <h3>Circle</h3>
          <dl>
            <dt>Radius</dt>
            <dd>${this.radius} px</dd>
      
            <dt>Diameter</dt>
            <dd>${this.diameter} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>
      </div>`;
	}
}
