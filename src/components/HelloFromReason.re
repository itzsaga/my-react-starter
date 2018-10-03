let component = ReasonReact.statelessComponent("HelloFromReason");

let make = (~name, _children) => {
  ...component,
  render: _self => <div> (ReasonReact.string("Hello " ++ name ++ " from a ReasonReact component :-)")) </div>,
};

/* [@bs.deriving abstract]
type jsProps = {
  name: string,
};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~name=jsProps->nameGet,
      [||],
    )
  ); */