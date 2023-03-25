import { FeedbackTitle, SectionStyle } from "./Section.styled";
import PropTypes from 'prop-types';

const Section = ({title}) => {
    return (
        <SectionStyle>
            <FeedbackTitle>{title}</FeedbackTitle>
            </SectionStyle>
    )
}
Section.propTypes = {title:PropTypes.string.isRequired};

export default Section;