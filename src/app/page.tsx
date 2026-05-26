import { site } from "@/data/site";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div>
          <h1>{site.name}</h1>
          <p>@{site.handle}</p>
          <p>{site.tagline}</p>
        </div>

        <div>
          <p>{site.description}</p>
        </div>

        <div>
          <a href={site.links.github}>GitHub</a>
          <a href={site.links.resume}>Resume</a>
          <a href={`mailto:${site.links.email}`}>Email</a>
        </div>
      </section>
    </main>
  );
}
