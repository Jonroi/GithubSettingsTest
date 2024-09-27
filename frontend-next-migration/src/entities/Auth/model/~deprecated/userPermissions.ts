import { selectHasClan, selectIsAuthenticated } from "../authUserSlice";
import {createSelector} from "@reduxjs/toolkit";

const canISeeClans = createSelector(
    selectIsAuthenticated,
    (isAuthenticated) => isAuthenticated
);

const canISeeLogin = createSelector(
    selectIsAuthenticated,
    (isAuthenticated) => !isAuthenticated
);

const canISeeLogout = createSelector(
    selectIsAuthenticated,
    (isAuthenticated) => isAuthenticated
);

const canICreateClan = createSelector(
    selectIsAuthenticated,
    selectHasClan,
    (isAuthenticated, hasClan) => isAuthenticated && !hasClan
);

const canISeeOwnClan = createSelector(
    selectIsAuthenticated,
    selectHasClan,
    (isAuthenticated, hasClan) => isAuthenticated && hasClan
);


/**
 * @deprecated
 */
export const userPermissions = {
    canISeeLogin,
    canISeeLogout,
    canICreateClan,
    canISeeClans,
    canISeeOwnClan
};

/**
 * @deprecated
 */
export type UserPermissions = keyof typeof userPermissions;