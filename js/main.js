import * as maps from './map.js';
import * as constants from './constants.js';
import { $, $all, createInputList, changeTab } from './utilities.js';


document.addEventListener("DOMContentLoaded", () => {
  $("#get-started").onclick = () => {
    $("body").classList.remove("overlay-on");
  };

  let categories = Object.keys(constants.LAYER_MAP);
  createInputList($("#categories"), categories);
  const map = new maps.RealMap($("#map"));
  const id = "AOI";
  map.switchLayers(id);
  $all(".tablinks").forEach(el => {
    el.onclick = (event) => {
      changeTab(event);
      if (map) {
        map.switchLayers(event.target.id.split('-')[0]);
      }
    };
    if (el.id.split("-")[0] == id) {
      el.classList.add("tab-active");
    }
  });
  // Select first tab
  $("#AOI-tab").click();

  // Init slider
  $("#mines-slider").value = 2010;
  $("#mines-slider").addEventListener("change", function() {
    let allYears = [2010, 2000, 1990, 1980];
    for (const year of allYears) {
      map.showLayer("mines_" + year + "s");
    }
    allYears = allYears.filter(x => x > this.value);
    for (const year of allYears) {
      map.hideLayer("mines_" + year + "s");
    }
    // Hide all dynamic mine content
    $all(".mines-year-content").forEach(el => el.hidden = true);
    if (this.value == 2010 || this.value == 2000) {
      $("#mines-2000-2010").removeAttribute("hidden");
    } else {
      $("#mines-" + this.value).removeAttribute("hidden");
    }
  });;

  // Select first mine content
  const years_id = ["2000-2010", "1990", "1980"];
  years_id.forEach(year => $("#mines-" + year).hidden = true);
  $("#mines-2000-2010").removeAttribute("hidden");
});
