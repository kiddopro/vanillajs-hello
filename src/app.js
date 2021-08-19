/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dot = [".com", ".net", ".cl", ".uy"];

window.onload = function() {
  //write your code here
  document.body.innerHTML = randomDomain(pronoun, adj, noun, dot);
};

const randomDomain = (pronoun, adj, noun, dot) => {
  let p = pronoun[Math.floor(Math.random() * pronoun.length)];
  let a = adj[Math.floor(Math.random() * adj.length)];
  let n = noun[Math.floor(Math.random() * noun.length)];
  let d = dot[Math.floor(Math.random() * dot.length)];

  return p + a + n + d;
};
