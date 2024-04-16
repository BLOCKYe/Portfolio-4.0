export default class Tss<T extends string | number | symbol> {
  private readonly initial: string = "";
  private readonly variants: { [K in T]?: string } = {};

  constructor(initial: string, variants: { [K in T]?: string }) {
    this.initial = initial;
    this.variants = variants;
  }

  /**
   * Returns styles
   * @param variants
   * @param additional
   */
  public style(variants?: T[], additional?: string): string {
    if (!variants) return this.initial + " ";

    let styleString = this.initial + " ";
    for (const variant of variants) {
      styleString = styleString + this.variants[variant] + " ";
    }

    return styleString + (additional ?? "") + " ";
  }
}
