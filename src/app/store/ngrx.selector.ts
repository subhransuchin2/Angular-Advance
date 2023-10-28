import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../login.interface';

export const selectLoginState = createFeatureSelector<LoginState>('login');
export const selectUserData = createSelector(selectLoginState, (state) => {
  return {
    userId: state.userId,
    username: state.username,
  };
});
export const selectUserId = createSelector(
  selectLoginState,
  (state) => state.userId
);
export const selectUsername = createSelector(
  selectLoginState,
  (state) => state.username
);
export const selectToken = createSelector(selectLoginState, (state) => {
  return state.tokenFromBe;
});

// import { createSelector } from '@ngrx/store';
// import { selectMyAccountSharedState } from '../../reducers';

// export const selectMyAccountPaymentsInformationDataState = createSelector(
//   selectMyAccountSharedState,
//   myAccountState => myAccountState.myAccountPaymentsData
// );

// export const selectMyAccountSavedPayments = createSelector(
//   selectMyAccountPaymentsInformationDataState,
//   myAccountPaymentsDataState => myAccountPaymentsDataState.payments
// );

// export const selectMyAccountDefaultPayment = createSelector(selectMyAccountSavedPayments, payments =>
//   !payments ? null : payments.filter(payment => payment.defaultPayment)[0]
// );
// export const selectMyAccountPaymentError = createSelector(
//   selectMyAccountPaymentsInformationDataState,
//   myAccountPaymentsDataState => myAccountPaymentsDataState.error
// );
// export const selectIsCardAdded = createSelector(
//   selectMyAccountPaymentsInformationDataState,
//   myAccountPaymentsDataState => myAccountPaymentsDataState.isCardAdded
// );
// export const selectMyAccountAddPaymentSuccessData = createSelector(
//   selectMyAccountPaymentsInformationDataState,
//   myAccountPaymentsDataState => myAccountPaymentsDataState.paymentAddSuccessData
// );
