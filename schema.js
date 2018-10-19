import {gql} from 'apollo-server';

export default gql`
  type Continent @cacheControl(maxAge: 86400) {
    code: String
    name: String
  }

  type Country @cacheControl(maxAge: 86400) {
    code: String
    name: String
    native: String
    phone: String
    continent: Continent
    currency: String
    languages: [Language]
    emoji: String
    emojiU: String
  }

  type Language @cacheControl(maxAge: 86400) {
    code: String
    name: String
    native: String
    rtl: Int
  }

  type Query {
    continents: [Continent]
    continent(code: String): Continent
    countries: [Country]
    country(code: String): Country
    languages: [Language]
    language(code: String): Language
  }
`;
