import ErrorPage from '../components/error-page';
import useGAService from '../core/app-services/ga-service';

export default function Custom500() {
  const gaService = useGAService();
  gaService.pageView('/500');
  return <ErrorPage />;
}
