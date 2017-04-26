

export default [

  {
    _id: "all",
    _type: "Element",
    element: "div",
    children: [
      "simple-text",
      "data-item",
      "data-collection",
      "data-collection-with-placeholders",
      "simple-condition",
    ],
  },

    // Simple Text
  {
    _id: "simple-text",
    _type: "Element",
    element: "div",
    style: { padding: "10px"},
    children: ["simple-text.hello", "simple-text.world"]
  },
  {
    _id: "simple-text.hello",
    _type: "Text",
    text: "Hello",
  },
  {
    _id: "simple-text.world",
    _type: "Text",
    text: "World",
  },

    // Data Collection
  {
    _id: "data-collection",
    _type: "Element",
    element: "div",
    style: { padding: "10px"},
    children: ["data-collection.data"],
  },
  {
    _id: "data-collection.data",
    _type: "Data",
    name: "alias",
    data: [
      {name: "one"},
      {name: "two"},
      {name: "three"},
    ],
    children: ["data.row"],
  },

    // Data Collection with placeholders
  {
    _id: "data-collection-with-placeholders",
    _type: "Element",
    element: "div",
    style: { padding: "10px"},
    children: ["data-collection-with-placeholders.data"],
  },
  {
    _id: "data-collection-with-placeholders.data",
    _type: "Data",
    name: "alias",
    data: [
      {name: "four"},
      {name: "five"},
      {name: "six"},
    ],
    children: ["data.row"],
  },
  {
    _id: "data-collection-with-placeholders.data",
    _type: "Data",
    data: "collection.data",
    children: ["data.row"],
  },

  // Data Item
  {
    _id: "data-item",
    _type: "Element",
    element: "div",
    style: { padding: "10px"},
    children: ["data-item.data"],
  },
  {
    _id: "data-item.data",
    _type: "Data",
    name: "alias",
    data: {name: "one"},
    children: ["data.row"],
  },

    // Data Row with simple translation
  {
    _id: "data.row",
    _type: "Element",
    element: "div",
    style: { padding: "10px"},
    children: ["data.row.name"],
  },
  {
    _id: "data.row.name",
    _type: "Text",
    text: "Repeat {alias.name}",
  },

  // Simple condition
  {
    _id: "simple-condition",
    _type: "Condition",
    source: true,
    value: true,
    pass: ["simple-condition.pass"],
    reject: ["simple-condition.reject"],
  },
  {
    _id: "simple-condition.pass",
    _type: "Text",
    text: "This should be visible",
  },
  {
    _id: "simple-condition.reject",
    _type: "Text",
    text: "This should NOT be visible",
  },
]
