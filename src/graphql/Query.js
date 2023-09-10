import { gql } from "@apollo/client";

export const USER_REGISTER = gql`
  mutation Mutation($userInput: userInput) {
    createUser(UserInput: $userInput) {
      id
    }
  }
`;

export const GET_ALL_USER = gql`
  query GetAllUser {
    getAllUser {
      id
      FName
      LName
      email
      contact
      state
      zip
      password
      Cpassword
    }
  }
`;

export const GET_ALL_VENDER = gql`
  query GetAllVender {
    getAllVender {
      id
      FName
      LName
      email
      contact
      state
      zip
      password
      Cpassword
    }
  }
`;

export const GET_ALL_PRODUCT = gql`
  query GetAllProduct {
    getAllProduct {
      id
      productName
      productPrice
      productDescription
      image
      vender {
        id
        FName
        LName
        email
        contact
        state
        zip
        password
        Cpassword
      }
    }
  }
`;

export const GET_ALL_PRODUCT_OF_VENDER = gql`
  query Query($venderId: ID) {
    getAllProductOfVender(venderId: $venderId) {
      id
      productName
      productPrice
      productDescription
      image
      productCategory
      vender {
        id
        FName
        LName
        email
        contact
        state
        zip
        password
        Cpassword
      }
    }
  }
`;
