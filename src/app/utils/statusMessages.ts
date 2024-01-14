export interface ErrorMessages {
  error: string;
  userNotFound: string;
  forbidden: string;
  serverError: string;
  serverDown: string;
  problemaWithServer: string;
  invalidCompanyId: string;
  wrongCredentials: string;
  nothingFound: string;

  errorFetchingData: string;
}

export const statusMessages: ErrorMessages = {

  error: 'Something went wrong, please try again',
  userNotFound: 'User not found',
  forbidden: 'NO ACCESS',
  serverError: 'Problema la server va rugam sa incercati mai tarziu',
  serverDown: 'Serverul nu raspunde',
  problemaWithServer: 'Problema la incarcarea datelor',
  invalidCompanyId: 'Invalid company ID',
  wrongCredentials: 'Wrong credentials, please try again',
  nothingFound: 'Nu am gasit nimic',

  errorFetchingData: 'Problema la server va rugam sa incercati mai tarziu'
}
