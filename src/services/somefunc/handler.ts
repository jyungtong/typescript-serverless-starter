import uuid from 'uuid/v4';
import { dateId } from '@shared/utils';

export const hello = (): void => {
  console.log(`hello world from typescript ${uuid()}`);
  console.log(`dateId ${dateId()}`);
};
