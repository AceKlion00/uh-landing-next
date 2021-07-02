import ReactGA from 'react-ga';

interface GAService {
  initialize: () => void;
  pageView: (url: string) => void;
}

export default function useGAService(): GAService {

  const initialize = () => {
    ReactGA.initialize('UA-176721306-1');
  };

  const pageView = (url: string) => {
    ReactGA.pageview(url);
  };

  return {
    initialize, pageView
  };

}
