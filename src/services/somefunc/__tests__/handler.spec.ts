import { hello } from '../handler';

const uuidMock = jest.fn();

jest.mock('uuid/v4', () => (): jest.Mock => uuidMock());

describe('some func', () => {
  beforeEach(() => {
    uuidMock.mockReturnValue('something');
    hello();
  });

  it('should do something', () => {
    expect(uuidMock).toHaveBeenCalled();
  });
});
