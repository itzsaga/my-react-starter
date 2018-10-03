// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var HelloFromReason$MyReactStarter = require("./HelloFromReason.bs.js");

Css.$$global("body", /* :: */[
      Css.fontFamily("Segoe UI, Tahoma, Geneva, Verdana, sans-serif"),
      /* :: */[
        Css.color(Css.white),
        /* :: */[
          Css.backgroundColor(Css.black),
          /* [] */0
        ]
      ]
    ]);

var component = ReasonReact.reducerComponent("App");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", undefined, React.createElement("h1", undefined, "Welcome to My Starter App"), "Name: ", React.createElement("input", {
                              value: self[/* state */1][/* inputText */0],
                              onChange: (function ($$event) {
                                  return Curry._1(self[/* send */3], /* InputText */[$$event.target.value]);
                                })
                            }), ReasonReact.element(undefined, undefined, HelloFromReason$MyReactStarter.make(self[/* state */1][/* inputText */0], /* array */[])));
            }),
          /* initialState */(function () {
              return /* record */[/* inputText */""];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action) {
              var newText = action[0];
              return (function () {
                  return /* Update */Block.__(0, [/* record */[/* inputText */newText]]);
                });
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/*  Not a pure module */
