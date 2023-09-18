class Project
{
    organization = null;
    name = "";
    content = "";
    image = "";
    link = "";
    features = [];
    contributors = [];
    supervisors = [];
    Project(organization, name, content, image, link, features, contributors, supervisors)
    {
        this.organization = organization;
        this.name = name;
        this.content = content;
        this.image = image;
        this.link = link;
        this.features = features;
        this.contributors = contributors;
        this.supervisors = supervisors;
    }
}

class Organization
{
    name = "";
    content = "";
    photo = "";
    link = "";
    references = [];
    features = [];
    projects = [];
    Organization(name, content, photo, link, references, features, projects)
    {
        this.name = name;
        this.content = content;
        this.photo = photo;
        this.link = link;
        this.references = references;
        this.features = features;
        this.projects = projects;
    }
}

class Feature
{
    title = "";
    content = "";
    photo = "";
    Feature(title, content, photo)
    {
        this.title = title;
        this.content = content;
        this.photo = photo;
    }
}

class Reference
{
    name = "";
    email = "";
    photo = "";

    Reference(name, email, photo)
    {
        this.name = name;
        this.email = email;
        this.photo = photo;
    }
}