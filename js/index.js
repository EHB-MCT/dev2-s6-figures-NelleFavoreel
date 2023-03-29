"use strict";
import Figure from "./Figure.js";
import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";
import Square from "./Square.js";

const form = {
	changeSelect(e) {},
	init() {
		console.log("Form init!");

		const circle = new Circle("circle", 40);
		circle.htmlString;
		const square = new Square("square", 30);
		square.htmlString;
		const rectangle = new Rectangle("Rectangle", 20, 40);
		rectangle.htmlString;
		document.querySelector("#form").addEventListener("submit", this.submitForm);
	},
	inputElementsWithLabel(label, id) {},
	submitForm(e) {
		e.preventDefault();
		console.log("submit!");
	},
};

form.init();
