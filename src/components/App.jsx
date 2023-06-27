import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  return (
    <div>
      <Section
        sectionType="form"
        title="Phonebook">
        <ContactForm />
      </Section>
      <Section
        sectionType="phonebook"
        title="Contacts">
            <Filter/>
            <ContactList/>
      </Section>
    </div>
  );
}
