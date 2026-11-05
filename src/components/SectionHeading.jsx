export function SectionHeading({ title, lead, id, light = false }) {
  return <header className={`section-heading${light ? " section-heading--light" : ""}`}>
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </header>;
}
