import { researchProjects } from '../research';

/** The research projects as plain rows. `showRole` adds the author role. */
const ProjectList = ({ showRole = false }: { showRole?: boolean }) => (
  <ul className="work-list">
    {researchProjects.map((item) => (
      <li key={item.title} className="work-row">
        <span className="work-title">{item.title}</span>
        <span className="work-note">
          {showRole ? `${item.role} · ${item.note}` : item.note}
        </span>
        <span className="work-status">{item.status}</span>
      </li>
    ))}
  </ul>
);

export default ProjectList;
