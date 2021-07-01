import ErrorPage from '../components/error-page';
import useGAService from '../core/app-services/ga-service';

export default function Custom404() {
  const gaService = useGAService();
  gaService.pageView('/404');
  return <ErrorPage statusCode={404} message={"Resource Not found"} />;
}
