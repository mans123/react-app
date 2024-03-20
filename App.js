const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React CDN"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { className: "child" }, "This is child 1"),
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h1", {}, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { className: "child" }, "This is child 2"),
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h1", {}, "This is h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
