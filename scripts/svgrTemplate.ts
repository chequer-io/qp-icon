import { types as t } from '@babel/core';
import type { Template } from '@svgr/babel-plugin-transform-svg-component';

const template: Template = (variables, { tpl }) => {
  return tpl`
${variables.imports}

interface Props extends SVGProps<SVGSVGElement> {
  pathProps?: SVGProps<SVGPathElement>;
}

const ${variables.componentName.replace(
    /Svg/,
    '',
  )} = ({ pathProps = {}, ...props }: Props) => (
  ${(() => {
    variables.jsx.children.forEach(c => {
      if (c.type !== 'JSXElement') return;

      const { name } = c.openingElement;
      if (name.type === 'JSXIdentifier' && name.name === 'path') {
        c.openingElement.attributes.push(
          t.jsxSpreadAttribute(t.identifier('pathProps')),
        );
      }
    });

    return variables.jsx;
  })()}
);

${variables.exports.map(s => {
  if (
    s.type === 'ExportDefaultDeclaration' &&
    s.declaration.type === 'Identifier'
  ) {
    s.declaration.name = s.declaration.name.replace(/Svg/, '');
  }
  return s;
})};
`;
};

module.exports = template;
