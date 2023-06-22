const originalModule = jest.requireActual('react-router-dom');
module.exports = {
  __esModule: true,
  ...originalModule,
  Link: jest.fn().mockImplementation(({ children }) => {
    return children;
  }),
  useLocation: jest.fn().mockReturnValue({ pathname: '/' }),
  useNavigate: jest.fn(),
};
