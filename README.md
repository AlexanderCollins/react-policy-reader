# react-policy-reader
A simple lightweight React policy reader

# Installation
`npm install react-policy-reader --save`

# Usage

```
import React from 'react';
import PolicyReader from 'react-policy-reader';

export default class TCPolicyPage extends React.PureComponent {

  sections = [
    {
      heading: "Section A",
      content: [
        "My first paragraph for secion A",
        "My Second paragraph for section A",
      ]
    },
    {
      heading: "Section B",
      content: [
        "My first paragraph for secion B",
        "My Second paragraph for section B",
      ]
    }
  ]

  render() {
    return <PolicyReader sections={sections} />
  }
}
```

# Demo Images

![alt text](https://raw.githubusercontent.com/alexandercollins/react-policy-reader/master/docs/desktop_view.png)

![alt text](https://raw.githubusercontent.com/alexandercollins/react-policy-reader/master/docs/mobile_view.png)

