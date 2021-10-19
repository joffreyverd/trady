import React, { PureComponent, ReactElement } from 'react';

type InitWidgetFunction = () => void;

class Widget extends PureComponent {
  containerId = `tradingview_6b85e-${Math.random()}`;

  componentDidMount = (): void => this.appendScript(this.initWidget);

  componentDidUpdate = (): void => {
    this.cleanWidget();
    this.initWidget();
  };

  canUseDOM = (): boolean => !!(
    typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
  );

  appendScript = (onload: InitWidgetFunction): void => {
    if (!this.canUseDOM()) {
      onload();
      return;
    }

    if (this.scriptExists()) {
      if (typeof TradingView === 'undefined') {
        this.updateOnloadListener(onload);
        return;
      }
      onload();
      return;
    }
    const script = document.createElement('script');
    script.id = 'tradingview-widget-script';
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = onload;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  getScriptElement = (): HTMLElement => document.getElementById('tradingview-widget-script');

  scriptExists = (): boolean => this.getScriptElement() !== null;

  updateOnloadListener = (onload: InitWidgetFunction): void => {
    const script = this.getScriptElement();
    const oldOnload = script.onload;
    script.onload = () => {
      oldOnload();
      onload();
    };
  };

  initWidget = (): void => {
    if (typeof TradingView === 'undefined' ||
            !document.getElementById(this.containerId)) {
      return;
    }
    const { widgetType, ...widgetConfig } = this.props;
    const config = { ...widgetConfig, container_id: this.containerId };
    new TradingView[widgetType](config);
  };

  cleanWidget = (): void => {
    if (!this.canUseDOM()) {
      return;
    }
    document.getElementById(this.containerId).innerHTML = '';
  };

  render = ():ReactElement => <article id={this.containerId} />;
}

Widget.defaultProps = {
  allow_symbol_change: true,
  autosize: false,
  enable_publishing: false,
  height: 610,
  hideideas: true,
  hide_legend: true,
  hide_side_toolbar: true,
  hide_top_toolbar: false,
  interval: 'D',
  locale: 'en',
  save_image: false,
  show_popup_button: false,
  style: '1',
  theme: 'dark',
  timezone: 'Etc/UTC',
  toolbar_bg: '#F1F3F6',
  widgetType: 'widget',
  width: '100%',
  withdateranges: false,
};

export default Widget;
