import { Dispatch, AnyAction } from 'redux';

export interface IRoutes {
    path: string;
}

export interface IVisible {
    siderVisibility: boolean;
}

export interface IDva {
    dispatch: Dispatch<AnyAction>;
}