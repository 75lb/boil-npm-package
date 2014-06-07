#!/usr/bin/env node
"use strict";

var boil = require("boil-js"),
    config = require("../boil.json");

var args = process.argv.slice(2);
if (args.length){
    config = boil.setArgs(config, args);
    boil.renderRecipe(config, "package");
} else {
    console.error("usage: package <name>");
}
