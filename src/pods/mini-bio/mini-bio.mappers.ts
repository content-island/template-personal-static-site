import * as vm from './mini-bio.model';
import * as api from './api';

export const mapMiniBioFromApiToVm = (data: api.MiniBio): vm.MiniBio => ({
  title: data.title,
  name: data.name,
  role: data.role,
  description: data.description,
  imageUrl: data.image.url,
  imageAlt: data.imageAlt,
});
