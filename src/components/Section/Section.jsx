import { FeedbackTitle, SectionStyle } from "./Section.styled";
import PropTypes from 'prop-types';

const Section = ({title,children}) => {
    return (
        <SectionStyle>
            <FeedbackTitle>{title}</FeedbackTitle>
            {children}
            </SectionStyle>
    )
}
Section.propTypes = {title:PropTypes.string.isRequired};

export default Section;