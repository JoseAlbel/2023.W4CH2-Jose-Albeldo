import { SyntheticEvent, useState } from "react";
import { Form } from "../../models/FormModel";

type FormState = Pick<Form, "name" | "lastName">;

export function AddTask2() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    lastName: "",
  });

  const handleChange = (event: SyntheticEvent) => {
    const element = event.target as HTMLFormElement;
    console.dir(element);
    setFormState({
      ...formState,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const task = new Form(formState.name, formState.lastName);
    console.log(task);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lastName">Titulo</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formState?.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Responsable</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formState?.lastName}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Añadir</button>
    </form>
  );
}
