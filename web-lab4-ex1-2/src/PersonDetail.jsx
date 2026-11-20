
import { useParams } from "react-router";

export default function PersonDetail({ people }) {
  const { id } = useParams();

  const person = people.find((p) => p.id === id);

  if (!person) {
    return (
      <div role="alert">
        404: Person Not Found
      </div>
    );
  }

  return (
    <dl className="person-details">
      <dt>Name</dt>
      <dd>{person.name}</dd>

      <dt>Role</dt>
      <dd>{person.role}</dd>
    </dl>
  );
}
