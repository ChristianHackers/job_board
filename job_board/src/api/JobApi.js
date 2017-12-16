const jobs = [
  {
    id: 1,
    title: 'Frontend Engineer',
    shortDescription: 'I\'m a pretty little job posting. You make good sites we pay you good money',
    longDescription: "Aliquam erat volutpat. Nullam sagittis, quam sed placerat pretium, massa justo maximus nunc, a mattis lacus mi sed ante. Aliquam et mollis ex. Donec auctor id nibh vel tempor. Nam rutrum varius volutpat. Vivamus sed hendrerit libero. Vivamus vitae luctus velit. Mauris placerat luctus vestibulum. Donec ac enim a sem blandit euismod. Integer molestie rhoncus felis sed elementum. Mauris nec massa luctus, euismod arcu a, scelerisque sapien. Aliquam lobortis arcu a vestibulum lacinia. Etiam ullamcorper, velit eu pretium lobortis, urna lectus sagittis leo, id ultricies tortor nisi ut ante. Nam laoreet sapien eget tortor condimentum, vel euismod sem elementum. Aliquam feugiat augue quis eros semper laoreet."
  },
  {
    id: 2,
    title: 'Backend Engineer',
    shortDescription: 'Needed: Software developer to make an awesome architecture and get none of the glory.',
    longDescription: "Aliquam erat volutpat. Nullam sagittis, quam sed placerat pretium, massa justo maximus nunc, a mattis lacus mi sed ante. Aliquam et mollis ex. Donec auctor id nibh vel tempor. Nam rutrum varius volutpat. Vivamus sed hendrerit libero. Vivamus vitae luctus velit. Mauris placerat luctus vestibulum. Donec ac enim a sem blandit euismod. Integer molestie rhoncus felis sed elementum. Mauris nec massa luctus, euismod arcu a, scelerisque sapien. Aliquam lobortis arcu a vestibulum lacinia. Etiam ullamcorper, velit eu pretium lobortis, urna lectus sagittis leo, id ultricies tortor nisi ut ante. Nam laoreet sapien eget tortor condimentum, vel euismod sem elementum. Aliquam feugiat augue quis eros semper laoreet."
  },
  {
    id:3,
    title: 'Coffee Fetcher',
    shortDescription: 'You are the lifeblood of the company. You will provide the life giving liquid to sustain our company',
    longDescription: "Aliquam erat volutpat. Nullam sagittis, quam sed placerat pretium, massa justo maximus nunc, a mattis lacus mi sed ante. Aliquam et mollis ex. Donec auctor id nibh vel tempor. Nam rutrum varius volutpat. Vivamus sed hendrerit libero. Vivamus vitae luctus velit. Mauris placerat luctus vestibulum. Donec ac enim a sem blandit euismod. Integer molestie rhoncus felis sed elementum. Mauris nec massa luctus, euismod arcu a, scelerisque sapien. Aliquam lobortis arcu a vestibulum lacinia. Etiam ullamcorper, velit eu pretium lobortis, urna lectus sagittis leo, id ultricies tortor nisi ut ante. Nam laoreet sapien eget tortor condimentum, vel euismod sem elementum. Aliquam feugiat augue quis eros semper laoreet."
  },
  {
    id: 4,
    title: 'Scrum Master',
    shortDescription: 'Need a master of all the scrums. Must have yoda-like aptitude for wrangling stray developers to get stuff done',
    longDescription: "Aliquam erat volutpat. Nullam sagittis, quam sed placerat pretium, massa justo maximus nunc, a mattis lacus mi sed ante. Aliquam et mollis ex. Donec auctor id nibh vel tempor. Nam rutrum varius volutpat. Vivamus sed hendrerit libero. Vivamus vitae luctus velit. Mauris placerat luctus vestibulum. Donec ac enim a sem blandit euismod. Integer molestie rhoncus felis sed elementum. Mauris nec massa luctus, euismod arcu a, scelerisque sapien. Aliquam lobortis arcu a vestibulum lacinia. Etiam ullamcorper, velit eu pretium lobortis, urna lectus sagittis leo, id ultricies tortor nisi ut ante. Nam laoreet sapien eget tortor condimentum, vel euismod sem elementum. Aliquam feugiat augue quis eros semper laoreet."
  }
];

export function getAllJobs() {
  return jobs;
}

export function getJobById(id) {
  for (let i = 0; i < jobs.length; ++i) {
    let job = jobs[i];
    if(job.id === parseInt(id)) {
      return job;
    }
  }
  return null;
}