import { all, fork } from "@redux-saga/core/effects";
import rootSaga from "..";
import loginSaga from "../login";

describe('Test for Index Saga', () => {
    it('Should fork all sagas', () => {
        const callSaga = rootSaga();
        const next = callSaga.next();

        expect(next.value).toEqual(
            all([
                fork(loginSaga),
            ])
        )
    });
});