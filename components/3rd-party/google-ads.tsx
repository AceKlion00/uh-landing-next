import Script from 'next/script';

export default function GoogleAds() {
  return (<>
    <Script src="https://www.googletagmanager.com/gtag/js?id=AW-603078285" />
    <Script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);gtag('js',new Date());gtag('config','AW-603078285');` }} />
    <Script dangerouslySetInnerHTML={{ __html: `function gtag_report_conversion_purchase(budget,transactionId){gtag('event','conversion',{'send_to':'AW-603078285/RByPCIDwhpICEI39yJ8C','value':budget,'currency':'USD','transaction_id':transactionId});return false;}` }} />
    <Script dangerouslySetInnerHTML={{ __html: `function gtag_report_conversion_contact(url){var callback=function(){if(typeof(url)!='undefined'&&url){window.location=url;}};gtag('event','conversion',{'send_to':'AW-603078285/RPXRCNLqwKICEI39yJ8C','value':1.0,'currency':'USD','event_callback':callback});return false;}` }} />
  </>);
}
