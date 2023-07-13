function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

function getSideEffects(partialName, options) {
  const { importStyle = 'css' } = options;

  if (!importStyle) {return;};

  // Required other components styles
  const requiredOtherStyles = [
    'pagination',
    'checkbox',
    'checkbox-group',
    'select',
    'option',
    'tooltip',
    'scrollbar'
  ];

  if (importStyle === 'sass') {
    const extraStyles = requiredOtherStyles.map(item => {
      return `element-ui/packages/theme-chalk/src/${item}.scss`;
    });
    return [
      'element-ui/packages/theme-chalk/src/base.scss',
      `element-ui/packages/theme-chalk/src/${partialName}.scss`
    ].concat(extraStyles);
  } else {
    const extraStyles = requiredOtherStyles.map(item => {
      return `element-ui/lib/theme-chalk/${item}.css`;
    });
    return [
      'element-ui/lib/theme-chalk/base.css',
      `element-ui/lib/theme-chalk/${partialName}.css`
    ].concat(extraStyles);
  }
}

export default function ImprovedElTableResolver(options = {}) {
  return (name) => {
    if (name.startsWith('IEl')) {
      const compName = name.slice(3);
      const partialName = kebabCase(compName);
      return {
        path: `@ngekoding/el-table/lib/${partialName}`,
        sideEffects: getSideEffects(partialName, options)
      };
    }
  };
}
