Css.(
  global(
    "body",
    [
      fontFamily("Segoe UI, Tahoma, Geneva, Verdana, sans-serif"),
      color(white),
      backgroundColor(black),
    ],
  )
);

type state = {inputText: string};

type action =
  | InputText(string);  

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  initialState: () => {inputText: ""},
  reducer: action =>
    switch (action) {
    | InputText(newText) => (
        _state => ReasonReact.Update({inputText: newText})
      )
    },
  render: self =>
    <div>
      <h1> (ReasonReact.string("Welcome to My Starter App")) </h1>
      (ReasonReact.string("Name: "))
      <input
        value=self.state.inputText
        onChange=(
          event =>
            self.send(InputText(ReactEvent.Form.target(event)##value))
        )
      />
      <HelloFromReason name=self.state.inputText />
    </div>,
};