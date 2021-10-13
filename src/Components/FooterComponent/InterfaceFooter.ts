export interface ILogoAndOptionFooterComponent {
  firstHalfOptionsFooter: IOptionsFooter[];
  SecondHalftOptionsFooter: IOptionsFooter[];
}
interface IOptionsFooter {
  TITLE: string;
  PATH: string;
}

export interface ISocialMediaFooterComponent {
  socialMedias: IsocialMedias[];
}

interface IsocialMedias {
  name: string;
  url: string;
  icon: string;
}
