import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Selector from "./components/Selector";
import TermsCheckBox from "./components/TermsCheckbox";
import { toast } from "sonner";
import SuccessMessage from "./components/SuccessMessage";

const defaultFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  query: null,
  termsAgreed: false,
};

const defaultFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  query: "",
  termsAgreed: "",
};
const App = () => {
  const [formValues, setFormValues] = React.useState(defaultFormValues);
  const [formErrors, setFormErrors] = React.useState(defaultFormErrors);
  const handleChange = (key, value) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formErrors).every((error) => !error)) {
      toast.custom((t) => <SuccessMessage dismiss={() => toast.dismiss(t)} />, {
        duration: 5000,
      });
      setFormValues(defaultFormValues);
    }
  };
  return (
    <main className="min-h-screen bg-green-light flex flex-col justify-center items-center p-3">
      <section className="w-full lg:w-[700px] bg-white p-8 rounded-2xl">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <fieldset className="flex flex-col lg:flex-row gap-3">
            <Input
              label={"First Name"}
              required
              value={formValues.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              error={formErrors.firstName}
            />
            <Input
              label={"Last Name"}
              required
              value={formValues.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              error={formErrors.lastName}
            />
          </fieldset>
          <Input
            label={"Email Address"}
            required
            type="email"
            value={formValues.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={formErrors.email}
          />
          <Selector
            label={"Query Type"}
            required
            error={formErrors.query}
            options={["General Enquiry", "General Request"]}
            selected={formValues.query}
            setSelected={(value) => handleChange("query", value)}
          />

          <Input
            label={"Message"}
            required
            inputType="textarea"
            rows={5}
            value={formValues.message}
            onChange={(e) => handleChange("message", e.target.value)}
            error={formErrors.message}
          />
          <TermsCheckBox
            label={"I Consent to be contacted by the team"}
            checked={formValues.termsAgreed}
            setChecked={(value) => handleChange("termsAgreed", value)}
            error={formErrors.termsAgreed}
            required
          />
          <Button
            onClick={() =>
              setFormErrors({
                firstName: formValues.firstName ? "" : "First Name is required",
                lastName: formValues.lastName ? "" : "Last Name is required",
                email: formValues.email ? "" : "Email is required",
                message: formValues.message ? "" : "Message is required",
                query: formValues.query ? "" : "Query Type is required",
                termsAgreed: formValues.termsAgreed
                  ? ""
                  : "You must agree to the terms",
              })
            }
          >
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
};

export default App;
