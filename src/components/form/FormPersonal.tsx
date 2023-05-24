import { SyntheticEvent } from "react";
import { Form } from "../../models/FormModel";

export function AddForm() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formModel = new Form(
      (form.elements.namedItem("name") as HTMLInputElement).value,
      (form.elements.namedItem("lastName") as HTMLInputElement).value,
      (form.elements.namedItem("Birthdate") as HTMLInputElement).value,
      (form.elements.namedItem("gender") as HTMLInputElement).value,
      (form.elements.namedItem("email") as HTMLInputElement).value,
      (form.elements.namedItem("newsletter") as HTMLInputElement).value
    );
    console.log(formModel);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Titulo</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="lastName">Titulo</label>
        <input type="text" name="lastName" id="lastName" required />
      </div>
      <div>
        <label htmlFor="Birthdate">Titulo</label>
        <input type="text" name="Birthdate" id="Birthdate" required />
      </div>
      <div>
        <label htmlFor="owner">Responsable</label>
        <input type="text" name="owner" id="owner" />
      </div>
      <button type="submit">Añadir</button>
    </form>
  );
}
