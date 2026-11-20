
type Person = {
  name: string;
  role: string;
  email: string;
};

export default function PersonDetail() {
  const person: Person = {
    name: "Pham Ngoc Thach",
    role: "Multi-Billionaire",
    email: "pngocthach2006@gmail.com",
  };

  return (
    <section className="person-detail">
      <h2>Person Detail</h2>

      <dl>
        <dt>Name</dt>
        <dd>{person.name}</dd>

        <dt>Role</dt>
        <dd>{person.role}</dd>

        <dt>Email</dt>
        <dd>{person.email}</dd>
      </dl>
    </section>
  );
}
