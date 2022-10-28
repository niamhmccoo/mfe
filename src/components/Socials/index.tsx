import React from 'react';
import { Picture } from '../../shared.styles';
import { Wrap, StyledAnchor } from './Socials.styles';

type Item = { src: any; alt: string; url: string };

type SocialsProps = {
	socials: Item[];
};

const Socials = ({ socials }: SocialsProps) => (
	<Wrap>
		{socials.map((s) => (
			<StyledAnchor href={s.url} target='_blank'>
				<Picture src={s.src} alt={s.alt} />
			</StyledAnchor>
		))}
	</Wrap>
);

export default Socials;
