export class FooterClickedEvent {
  public totalFooterClicks: number;
  constructor(clicks: number) {
    this.totalFooterClicks = clicks;
  }
}
