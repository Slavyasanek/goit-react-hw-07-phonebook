import { SectionWrapper } from "./Section.styled";
import PropTypes  from 'prop-types';

export const Section = ({sectionType, title, children }) => {
        return (
            <SectionWrapper sectionType={sectionType}>
                {title === 'Phonebook' ? (<h1>{title}</h1>) : (<h2>{title}</h2>)}
                {children}
            </SectionWrapper>
        );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    sectionType: PropTypes.string.isRequired
}