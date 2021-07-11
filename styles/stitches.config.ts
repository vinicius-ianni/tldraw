import { createCss, defaultThemeMap } from '@stitches/react'

const { styled, global, css, theme, getCssString } = createCss({
  themeMap: {
    ...defaultThemeMap,
  },
  theme: {
    colors: {
      codeHl: 'rgba(144, 144, 144, .15)',
      brushFill: 'rgba(0,0,0,.05)',
      brushStroke: 'rgba(0,0,0,.25)',
      hint: 'rgba(216, 226, 249, 1.000)',
      selected: 'rgba(66, 133, 244, 1.000)',
      bounds: 'rgba(65, 132, 244, 1.000)',
      boundsBg: 'rgba(65, 132, 244, 0.05)',
      highlight: 'rgba(65, 132, 244, 0.15)',
      overlay: 'rgba(0, 0, 0, 0.15)',
      border: '#aaaaaa',
      canvas: '#f8f9fa',
      panel: '#fefefe',
      inactive: '#cccccf',
      hover: '#efefef',
      text: '#333333',
      muted: '#777777',
      input: '#f3f3f3',
      inputBorder: '#dddddd',
      lineError: 'rgba(255, 0, 0, .1)',
    },
    shadows: {
      2: '0px 1px 1px rgba(0, 0, 0, 0.14)',
      3: '0px 2px 3px rgba(0, 0, 0, 0.14)',
      4: '0px 4px 5px -1px rgba(0, 0, 0, 0.14)',
      8: '0px 12px 17px rgba(0, 0, 0, 0.14)',
      12: '0px 12px 17px rgba(0, 0, 0, 0.14)',
      24: '0px 24px 38px rgba(0, 0, 0, 0.14)',
    },
    space: {
      0: '2px',
      1: '3px',
      2: '4px',
      3: '8px',
      4: '12px',
    },
    fontSizes: {
      0: '10px',
      1: '12px',
      2: '13px',
      3: '16px',
      4: '18px',
    },
    fonts: {
      ui: '"Recursive", system-ui, sans-serif',
      body: '"Recursive", system-ui, sans-serif',
      mono: '"Recursive Mono", monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      0: '$1',
    },
    borderStyles: {},
    radii: {
      0: '2px',
      1: '4px',
      2: '8px',
    },
    zIndices: {},
    transitions: {},
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
  },
  utils: {
    zDash: () => (value: number) => {
      return {
        strokeDasharray: `calc(${value}px / var(--camera-zoom)) calc(${value}px / var(--camera-zoom))`,
      }
    },
    zStrokeWidth: () => (value: number | number[]) => {
      if (Array.isArray(value)) {
        return {
          strokeWidth: `calc(${value[0]}px / var(--camera-zoom))`,
        }
      }

      return {
        strokeWidth: `calc(${value}px / var(--camera-zoom))`,
      }
    },
  },
})

const light = theme({})

const dark = theme({
  colors: {
    brushFill: 'rgba(180, 180, 180, .05)',
    brushStroke: 'rgba(180, 180, 180, .25)',
    hint: 'rgba(216, 226, 249, 1.000)',
    selected: 'rgba(38, 150, 255, 1.000)',
    bounds: 'rgba(38, 150, 255, 1.000)',
    boundsBg: 'rgba(38, 150, 255, 0.05)',
    highlight: 'rgba(38, 150, 255, 0.15)',
    overlay: 'rgba(0, 0, 0, 0.15)',
    border: '#202529',
    canvas: '#343d45',
    panel: '#49555f',
    inactive: '#cccccf',
    hover: '#343d45',
    text: '#f8f9fa',
    muted: '#e0e2e6',
    input: '#f3f3f3',
    inputBorder: '#ddd',
    codeHl: 'rgba(144, 144, 144, .15)',
    lineError: 'rgba(255, 0, 0, .1)',
  },
  shadows: {
    2: '0px 1px 1px rgba(0, 0, 0, 0.24)',
    3: '0px 2px 3px rgba(0, 0, 0, 0.24)',
    4: '0px 4px 5px -1px rgba(0, 0, 0, 0.24)',
    8: '0px 12px 17px rgba(0, 0, 0, 0.24)',
    12: '0px 12px 17px rgba(0, 0, 0, 0.24)',
    24: '0px 24px 38px rgba(0, 0, 0, 0.24)',
  },
})

const globalStyles = global({
  '*': { boxSizing: 'border-box' },
  ':root': {
    '--camera-zoom': 1,
    '--scale': 'calc(1 / var(--camera-zoom))',
  },
  'html, body': {
    padding: '0px',
    margin: '0px',
    overscrollBehavior: 'none',
    overscrollBehaviorX: 'none',
    fontFamily: '$ui',
    fontSize: '$2',
    color: '$text',
    backgroundColor: '$canvas',
    minHeight: '100vh',
  },
  body: {
    overflow: 'hidden',
  },
})

export default styled

export { css, getCssString, globalStyles, light, dark }
