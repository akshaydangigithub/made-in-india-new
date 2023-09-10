import { gql } from "@apollo/client";

// -----------------Mutations-----------------

export const SUPER_ADMIN_LOGIN = gql`
  mutation Mutation($signInSuperAdminInput: signInSuperAdminInput) {
    signInSuperAdmin(SignInSuperAdminInput: $signInSuperAdminInput) {
      superAdminId
      superAdminToken
    }
  }
`;

export const CREAT_USER = gql`
  mutation Mutation($userInput: userInput) {
    createUser(UserInput: $userInput) {
      id
    }
  }
`;

export const USER_LOGIN = gql`
  mutation Mutation($signInUserInput: signInUserInput) {
    signInUser(SignInUserInput: $signInUserInput) {
      userId
      userToken
    }
  }
`;

export const CREAT_VENDER = gql`
  mutation Mutation($venderInput: venderInput) {
    createVender(VenderInput: $venderInput) {
      id
    }
  }
`;

export const VENDER_LOGIN = gql`
  mutation Mutation($signInVenderInput: signInVenderInput) {
    signInVender(SignInVenderInput: $signInVenderInput) {
      venderId
      venderToken
    }
  }
`;

export const CREATE_CONTACT = gql`
  mutation Mutation($contactInput: contactInput) {
    createContact(ContactInput: $contactInput) {
      id
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation Mutation($productInput: productInput) {
    createProduct(ProductInput: $productInput) {
      id
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation Mutation($productId: ID) {
    deleteProduct(productId: $productId) {
      id
    }
  }
`;
