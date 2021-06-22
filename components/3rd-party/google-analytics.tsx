export default function GoogleAnalytics() {
  return (<>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176721306-1" />
    <script defer dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);gtag('js',new Date());gtag('config','UA-176721306-1');` }}
    />
  </>);
}
