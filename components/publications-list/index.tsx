import React from 'react';
import styled from 'styled-components';

import CustomLink from '../custom-link';
import Wrapper from '../wrapper';

import { px2rem, media } from '../../styles/style-utils';

import { PUBLICATIONS } from './data';

const PublicationsList = () => (
  <WrapperExtended>
    <List>
      {Object.keys(PUBLICATIONS)
        .sort((a, b) => Number(b) - Number(a))
        .map((year, _) => (
          <ListItem>
            <Year>{year}</Year>
            {PUBLICATIONS[year].map(
              ({ title, authors, venue, orderOfAppearance, link }) => (
                <SubList>
                  <SubListItem>
                    <CustomLink
                      href={link}
                      copy={title}
                      target="_blank"
                      hasArrow={true}
                    />
                    <Copy>
                      {authors.map((name, index) => (
                        <>
                          <Author
                            key={name}
                            emphasized={orderOfAppearance == index}
                          >
                            {name}
                          </Author>
                          <>, </>
                        </>
                      ))}
                      <i>{venue}</i>
                    </Copy>
                  </SubListItem>
                </SubList>
              )
            )}
          </ListItem>
        ))}
    </List>
  </WrapperExtended>
);

export default PublicationsList;

const WrapperExtended = styled(Wrapper)`
  margin-top: ${({ theme: { spacing } }) => spacing[3]};
`;

const List = styled.ul`
  display: block;
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  border-bottom: ${({ theme: { borderWidths, colors } }) =>
    `${borderWidths[1]} solid ${colors.primaryLighten}`};
`;

const SubList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: ${({
    theme: {
      percentages: { full },
    },
  }) => full};

  ${media.md`
      width: ${({
        theme: {
          percentages: { fourth, half },
        },
      }) => `calc(${fourth} + ${half})`};
  `};
`;

const SubListItem = styled.li`
  font-size: ${({ theme: { spacing } }) => spacing[3]};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[1]};
  padding-bottom: ${({ theme: { spacing } }) => spacing[3]};
`;

const Year = styled.h2`
  font-size: ${({ theme: { spacing } }) =>
    `calc(${spacing[1]} + ${spacing[4]})`};
  font-family: ${({ theme: { fonts } }) => fonts.tertiary};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights[3]};
  line-height: ${({ theme: { lineHeight } }) => lineHeight[0]};
  margin: 0;
  padding: ${({ theme: { spacing } }) => `${spacing[3]} 0`};
`;

const Copy = styled.p`
  font-size: ${({ theme: { spacing } }) =>
    `calc(${spacing[1]} + ${spacing[2]})`};
  margin: ${({ theme: { spacing } }) => `${spacing[2]} 0 0 0`};
`;

interface AuthorProps {
  emphasized: boolean;
}

const Author = styled.span<AuthorProps>`
  background-color: ${({ emphasized, theme: { colors } }) =>
    emphasized ? colors.primaryLighten : 'transparent'};
`;
