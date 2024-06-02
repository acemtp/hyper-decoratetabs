'use strict';

function getTabValue(path) {
  const paths = window.config.getConfig()['hyper-decoratetabs']?.overrides;
  if (!paths) return '';
  const p = Object.entries(paths).find(entry => path.includes(entry[0]));
  return p?.[1] || '';
}

exports.getTabProps = function (uid, parentProps, props) {
  return Object.assign({}, props, { tabValue: getTabValue(props.text) });
};

exports.decorateTab = function (Tab, { React }) {
  return class extends Tab {
    render() {
      const style = {};

      const tabValue = this.props.tabValue;

      let emoji = '';

      if (tabValue.startsWith('#') || tabValue.startsWith('rgb')) {
        style.backgroundColor = tabValue;
        style.borderRadius = '50%';
        style.top = '10px';
        style.width = '13px';
        style.height = '13px';

      } else if (tabValue.startsWith('http')) {
        style.top = '4px';
        style.width = '24px';
        style.height = '24px';

        style.backgroundImage = 'url(' + tabValue + ')';
      } else {
        emoji = tabValue;
      }

      const dab = React.createElement('span', {
        className: 'tab_decorate',
        'data-emoji': emoji,
        style,
      });
      const customChildrenBefore = Array.from(this.props.customChildrenBefore || []).concat(dab);
      return React.createElement(Tab, Object.assign({}, this.props, { customChildrenBefore }));
    }
  }
};

exports.decorateConfig = function (config) {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .tab_decorate {
        position: absolute;
        left: 10px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .tab_decorate::after {
        content: attr(data-emoji);
        font-size: 24px;
      }
    `
  });
};
