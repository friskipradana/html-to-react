import React from 'react';
import propType from 'prop-types';

export default function Section(props) {
	const className = [ 'section' ];
	className.push(props.className);
	if (props.isCenteredContent) className.push('center-content');
	return <section className={className.join(' ')}>{props.children}</section>;
}
Section.propType = {
	isCenteredContent: propType.bool,
	className: propType.string
};
