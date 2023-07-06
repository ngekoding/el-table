function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

function getSideEffects(partialName, options) {
  const { importStyle = 'css' } = options;

  if (!importStyle) {return;};

  if (importStyle === 'sass') {
    return [
      'element-ui/packages/theme-chalk/src/base.scss',
      `element-ui/packages/theme-chalk/src/${partialName}.scss`
    ];
  } else {
    return [
      'element-ui/lib/theme-chalk/base.css',
      `element-ui/lib/theme-chalk/${partialName}.css`
    ];
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
