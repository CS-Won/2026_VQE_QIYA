declare module "katex" {
  interface KatexOptions {
    displayMode?: boolean
    throwOnError?: boolean
    errorColor?: string
    macros?: Record<string, string>
    strict?: boolean | string | ((errorCode: string) => string)
    trust?: boolean
  }

  function render(expression: string, element: HTMLElement, options?: KatexOptions): void
  function renderToString(expression: string, options?: KatexOptions): string

  export default { render, renderToString }
}
