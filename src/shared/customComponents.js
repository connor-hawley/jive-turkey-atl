import { Media, Jumbotron } from 'reactstrap';
import styled from 'styled-components';

export const ThemedJumbotron = styled(Jumbotron)`
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.gold};
  border-color: ${props => props.theme.gold};
  border-radius: 15px;
  border-style: solid;
  border-width: 3px;
`;

export const ThemedMedia = styled(Media)`
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.gold};
  font-family: ${props => props.theme.font};
  font-size: x-large;
`;

export const ImageMedia = styled(ThemedMedia)`
  max-width: 300px;
  border-radius: 25px;
`;

export const TitleMedia = styled(ThemedMedia)`
  font-size: 200%;
  font-weight: bold;
`;