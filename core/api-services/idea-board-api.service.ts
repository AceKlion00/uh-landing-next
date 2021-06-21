import { Idea, ProjectAccessoryType } from '../types';
import { doGet } from './http';

export const ideaBoardApiService = {
  getIdeas: (projectType: ProjectAccessoryType | null, skip = 0, take = 20) => {
    if (projectType) {
      return doGet<Idea[]>(`/idea-board/all?skip=${skip}&take=${take}&projectType=${projectType}`);
    } else {
      return doGet<Idea[]>(`/idea-board/all?skip=${skip}&take=${take}`);
    }
  }
};
