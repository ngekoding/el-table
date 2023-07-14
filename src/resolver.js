function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

function getSideEffects(partialName, options) {
  const { importStyle = 'css' } = options;

  if (!importStyle) {return;};

  const items = [
    'base',
    'pagination',
    'select',
    'option',
    'scrollbar',
    partialName
  ];

  if (importStyle === 'sass') {
    return items.map(item => `element-ui/packages/theme-chalk/src/${item}.scss`);
  } else {
    return items.map(item => `element-ui/lib/theme-chalk/${item}.css`);
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
