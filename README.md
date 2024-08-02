# TechIsHiring Job Search Resources

A small app listing job search resources for tech professionals separated by category, providing key information as well as links to view the resource. Inspired by [confs.tech](https://www.confs.tech) ([GitHub Repo](https://github.com/tech-conferences/confs.tech/))

## Atomic Design

This project uses Atomic Design for it's Components. Here are several resources for Atomic Design if you are unfamiliar:

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Atomic Design - How To Make Web and UI Design Easier](https://www.youtube.com/watch?v=W3A33dmp17E)

## Adding a Job Search Resource

All the job search resources are located at the [job search resources data repo](https://github.com/TechIsHiring/job-search-resource-data/blob/main/resources-data/data.json) as a json file. This file can be updated from the website or directly by creating a pull request to this file.

Job search resources have the following structure:

```json
{
  "category_name": [
    {
      "name": "",
      "outline": "",
      "link": "",
      "description": "",
      "owner": "",
      "submitted_by": "",
      "submitted_on": "*date example: Mon, 29 Jul 2024 14:47:40 GMT*"
    }
  ]
}
```

While not preferred, new categories can be added when adding new resources. Please add a note as to why there needs to be a new category in the pull request being created.

## Local development

### Before running the app

Before the application can be used, you will need to fork the [job search resources data repo](https://github.com/TechIsHiring/job-search-resource-data) and create a GitHub Personal Access Token before running the application.

Environment varialbes needs to also be set before running the application. Create a `.env.local` file in the root of the project and install these variables:

```text
GITHUB_PAT=*GitHub Personal Access Token*
GITHUB_REPO_ADDRESS=*A repo address omitting GitHub's domain, i.e. /repos/techishiring/techishiring-website*
GITHUB_REPO_DATA_LOCATION=*Location of the data source, which is a json file, in the repo, i.e. /resource/data.json*
```

### Running the app

To install the application:

```shell
npm ci
```

To run the application on a developement server:

```shell
npm run dev
```

### Code linting

To check the code and styles quality, use the following command:

```shell
npm run lint
```

### Production deployment

Run this command to build the project.

```shell
npm run build
```

## Contributing

Check out the [CONTRIBUTING.md](CONTRIBUTING.md) guide to assist with all you need to know before getting started with making changes to the codebase.

## License

[MIT License](LICENSE)
