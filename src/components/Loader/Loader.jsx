import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="6"
    color="#5736A3"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClassName=""
    visible={true}
  />
);
