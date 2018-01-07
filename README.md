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

![alt text](https://raw.githubusercontent.com/alexandercollins/react-policy-reader/master/docs/Screen Shot 2018-01-07 at 2.20.17 pm.png)
![alt text](https://raw.githubusercontent.com/alexandercollins/react-policy-reader/master/docs/Screen Shot 2018-01-07 at 2.20.39 pm.png)

