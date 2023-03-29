import Figure from "./Figure.js";

export default class Square extends Figure {
	constructor(name, size) {
		super(name);
		this.size = size;
	}
	get area() {
		return this.size * this.size;
	}
	get circumference() {
		return (this.size + this.size) * 2;
	}
	get htmlString() {
		return (document.getElementById("results").innerHTML = `<div class="result">
        <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this.size} px</dd>
      
            <dt>Width</dt>
            <dd>${this.size} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>
      </div>`);
	}
}
