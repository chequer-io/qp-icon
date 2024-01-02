<div align="center">
    <img src="querypie-logo.svg" alt="QueryPie Logo" width="100px">
    <br />
    <br />
    <a aria-label="Node Version" href="https://chequer.slack.com/archives/C046888P2Q0">
        <img alt="" src="https://img.shields.io/badge/node->=18.3.0-339933?logo=nodedotjs">
    </a>
    <a aria-label="Npm Version" href="https://chequer.slack.com/archives/C046888P2Q0">
        <img alt="" src="https://img.shields.io/badge/npm->=8.10.0-CB3837?logo=npm">
    </a>
    <br />
    <a aria-label="Storybook page" href="https://chequer-io.github.io/qp-icon">
        <img alt="" src="https://img.shields.io/badge/Storybook-6F2CAC?logo=storybook">
    </a>
    <br />
    <h1>QueryPie Icon Plugin</h1>
    <p>
        <a aria-label="QueryPie Homepage" href="https://querypie.com">QueryPie</a> is next-generation Cloud Data Protection Platform(CDPP).
        <br/>
        This repository generates React components from SVG files for all icons used in QueryPie.
    </p>
</div>

## Install

```bash
npm install qp-icon
```

## Example

```JavaScript
import { QILogout } from 'qp-icon';

function App() {
  return <div>
    <QILogout /> Logout
  </div>
}
```

## Getting started for Development

First, run the development server:

```bash
npm install
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## How to update the icons

Please refer to [Development](./DEVELOPMENT.md).

## Icon designer
- Chloe
