import { Dispatch, ReactNode, SetStateAction } from 'react';

type IChildren = {
  children: ReactNode;
}

interface IValue{
  setCategory: Dispatch<SetStateAction<string>>;
  setInput: Dispatch<SetStateAction<string>>;
  setSite: Dispatch<SetStateAction<string>>;
}

interface ITargetValue {
  target: {
    value: string;
  }
}

export type {
  IChildren,
  IValue,
  ITargetValue,
};
