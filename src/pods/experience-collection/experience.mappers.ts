import * as vm from './experience-collection.model';
import * as api from './api';

const mapExperienceFromApiToVm = (data: api.Experience): vm.Experience => ({
  company: data.company,
  role: data.role,
  period: data.period,
  description: data.description,
});

export const mapExperienceContentFromApiToVm = (data: api.ExperienceSection): vm.ExperienceContent => ({
  title: data.title,
  experienceCollection: data.experienceCollection.map((item: api.Experience) => mapExperienceFromApiToVm(item)),
});
