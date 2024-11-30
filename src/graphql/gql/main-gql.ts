import { gql } from '@apollo/client';

export const GetSentences = gql`
  query {
    sentence {
      id
      quote
      author
    }
  }
`;
